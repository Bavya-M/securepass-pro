import React from 'react';
import { Slider } from 'antd';
import styles from './LengthSlider.module.css';

export function LengthSlider({ value, onChange }) {
  const handleInputChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    
    // Clamp values between 8 and 64
    if (val < 8) val = 8;
    if (val > 64) val = 64;
    onChange(val);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <label htmlFor="length-input" className={styles.label}>
          Password Length
        </label>
        <div className={styles.valueDisplay}>
          <input
            id="length-input"
            type="number"
            min={8}
            max={64}
            value={value}
            onChange={handleInputChange}
            className={styles.numberInput}
            aria-label="Password length value"
          />
        </div>
      </div>
      
      <div className={styles.sliderWrapper}>
        <Slider
          min={8}
          max={64}
          value={value}
          onChange={onChange}
          tooltip={{ formatter: (val) => `${val} characters` }}
          aria-label="Password length slider"
        />
      </div>
    </div>
  );
}
