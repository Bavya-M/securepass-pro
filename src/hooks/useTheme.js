import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useTheme() {
  const [theme, setTheme] = useLocalStorage('securepass-theme', 'system');

  useEffect(() => {
    const root = document.documentElement;
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      let resolvedTheme = theme;
      if (theme === 'system') {
        resolvedTheme = darkMediaQuery.matches ? 'dark' : 'light';
      }
      
      // Set the data attribute for CSS targeting
      root.setAttribute('data-theme', resolvedTheme);
      
      // Toggle a class as well if libraries (like Ant Design) benefit from it
      if (resolvedTheme === 'dark') {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    };

    updateTheme();

    if (theme === 'system') {
      // Listen to system changes
      darkMediaQuery.addEventListener('change', updateTheme);
      return () => {
        darkMediaQuery.removeEventListener('change', updateTheme);
      };
    }
  }, [theme]);

  return [theme, setTheme];
}
