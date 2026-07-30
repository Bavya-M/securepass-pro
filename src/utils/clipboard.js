// Safe Clipboard copy helper

export async function copyToClipboard(text) {
  if (!navigator.clipboard) {
    // Fallback approach
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed'; // Avoid scrolling to bottom
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        return true;
      }
      throw new Error('Fallback copy failed');
    } catch (err) {
      console.error('Fallback clipboard copy failed:', err);
      return false;
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Clipboard API copy failed:', err);
    return false;
  }
}
