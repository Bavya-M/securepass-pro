import React from 'react';
import { Switch } from 'antd';
import { LengthSlider } from './LengthSlider';
import { AdvancedOptions } from './AdvancedOptions';
import styles from './PasswordOptions.module.css';

export function PasswordOptions({ settings, updateSetting }) {
  return (
    <div className={styles.optionsContainer}>
      <LengthSlider
        value={settings.length}
        onChange={(val) => updateSetting('length', val)}
      />

      <div className={styles.divider} />

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Character Pools</h4>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <div className={styles.itemText}>
              <span className={styles.itemLabel}>Uppercase Letters</span>
              <span className={styles.itemHelper}>A-Z</span>
            </div>
            <Switch
              checked={settings.useUppercase}
              onChange={(checked) => updateSetting('useUppercase', checked)}
              aria-label="Include uppercase letters"
            />
          </div>

          <div className={styles.gridItem}>
            <div className={styles.itemText}>
              <span className={styles.itemLabel}>Lowercase Letters</span>
              <span className={styles.itemHelper}>a-z</span>
            </div>
            <Switch
              checked={settings.useLowercase}
              onChange={(checked) => updateSetting('useLowercase', checked)}
              aria-label="Include lowercase letters"
            />
          </div>

          <div className={styles.gridItem}>
            <div className={styles.itemText}>
              <span className={styles.itemLabel}>Numeric Digits</span>
              <span className={styles.itemHelper}>0-9</span>
            </div>
            <Switch
              checked={settings.useNumbers}
              onChange={(checked) => updateSetting('useNumbers', checked)}
              aria-label="Include numbers"
            />
          </div>

          <div className={styles.gridItem}>
            <div className={styles.itemText}>
              <span className={styles.itemLabel}>Special Symbols</span>
              <span className={styles.itemHelper}>!@#$%^&*</span>
            </div>
            <Switch
              checked={settings.useSymbols}
              onChange={(checked) => updateSetting('useSymbols', checked)}
              aria-label="Include special symbols"
            />
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Advanced Criteria</h4>
        <AdvancedOptions settings={settings} updateSetting={updateSetting} />
      </div>
    </div>
  );
}
