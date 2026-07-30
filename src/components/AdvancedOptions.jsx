import React from 'react';
import { Switch, Tooltip } from 'antd';
import { Info } from 'lucide-react';
import styles from './AdvancedOptions.module.css';

export function AdvancedOptions({ settings, updateSetting }) {
  return (
    <div className={styles.container}>
      <div className={styles.optionRow}>
        <div className={styles.infoWrapper}>
          <div className={styles.labelWrapper}>
            <span className={styles.label}>Exclude Ambiguous</span>
            <Tooltip title="Excludes characters that look similar, such as i, l, 1, L, o, 0, O, and |">
              <Info size={14} className={styles.infoIcon} />
            </Tooltip>
          </div>
          <p className={styles.description}>Avoid characters like l, 1, O, 0</p>
        </div>
        <Switch
          checked={settings.excludeAmbiguous}
          onChange={(checked) => updateSetting('excludeAmbiguous', checked)}
          size="small"
          aria-label="Exclude ambiguous characters"
        />
      </div>

      <div className={styles.optionRow}>
        <div className={styles.infoWrapper}>
          <div className={styles.labelWrapper}>
            <span className={styles.label}>Prevent Duplicate Characters</span>
            <Tooltip title="Forces each character in the password to be unique">
              <Info size={14} className={styles.infoIcon} />
            </Tooltip>
          </div>
          <p className={styles.description}>Each character is used at most once</p>
        </div>
        <Switch
          checked={settings.preventDuplicates}
          onChange={(checked) => updateSetting('preventDuplicates', checked)}
          size="small"
          aria-label="Prevent duplicate characters"
        />
      </div>

      <div className={styles.optionRow}>
        <div className={styles.infoWrapper}>
          <div className={styles.labelWrapper}>
            <span className={styles.label}>Require Every Category</span>
            <Tooltip title="Guarantees at least one character from each selected pool (e.g. Uppercase, Numbers) is present">
              <Info size={14} className={styles.infoIcon} />
            </Tooltip>
          </div>
          <p className={styles.description}>Include all chosen character types</p>
        </div>
        <Switch
          checked={settings.requireAllSelected}
          onChange={(checked) => updateSetting('requireAllSelected', checked)}
          size="small"
          aria-label="Require every selected category"
        />
      </div>
    </div>
  );
}
