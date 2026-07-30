import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PasswordCard } from './components/PasswordCard';
import { EntropyCard } from './components/EntropyCard';
import { CrackTimeCard } from './components/CrackTimeCard';
import { HistoryPanel } from './components/HistoryPanel';
import { usePassword } from './hooks/usePassword';
import styles from './App.module.css';

function App() {
  const {
    password,
    settings,
    updateSetting,
    regenerate,
    history,
    addToHistory,
    clearHistory,
    deleteHistoryItem,
    entropy,
    strength,
    crackTime,
    showPassword,
    setShowPassword,
  } = usePassword();

  return (
    <div className="app-container">
      <Header />
      
      <main className={styles.mainLayout}>
        <PasswordCard
          password={password}
          settings={settings}
          updateSetting={updateSetting}
          regenerate={regenerate}
          strength={strength}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          addToHistory={addToHistory}
        />

        <div className={styles.statsGrid}>
          <EntropyCard entropy={entropy} />
          <CrackTimeCard crackTime={crackTime} />
        </div>

        <HistoryPanel
          history={history}
          onDeleteItem={deleteHistoryItem}
          onClearHistory={clearHistory}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;










