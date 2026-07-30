import React from 'react';
import { Card } from './common/Card';
import { PasswordDisplay } from './PasswordDisplay';
import { StrengthMeter } from './StrengthMeter';
import { PasswordOptions } from './PasswordOptions';
import styles from './PasswordCard.module.css';

export function PasswordCard({
  password,
  settings,
  updateSetting,
  regenerate,
  strength,
  showPassword,
  setShowPassword,
  addToHistory,
}) {
  return (
    <Card className={styles.generatorCard}>
      <div className={styles.cardContent}>
        {/* Step 1: Output Display */}
        <PasswordDisplay
          password={password}
          regenerate={regenerate}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          addToHistory={addToHistory}
        />
        
        {/* Step 2: Live Strength Meter */}
        <StrengthMeter strength={strength} />
        
        <div className={styles.divider} />
        
        {/* Step 3: Parameter Configuration options */}
        <PasswordOptions
          settings={settings}
          updateSetting={updateSetting}
        />
      </div>
    </Card>
  );
}
