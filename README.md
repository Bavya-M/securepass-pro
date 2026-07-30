# SecurePass Pro — Secure Password Generator

A production-grade, portfolio-ready, cryptographically-secure password generator built with **React 19**, **Vite**, **Ant Design**, and **Lucide Icons**. 

SecurePass Pro is designed with a premium, minimalist aesthetic inspired by Vercel, Stripe, and 1Password.

---

## 🚀 Features

- **Cryptographically Secure Generation**: Utilizes the modern browser **Web Crypto API** (`window.crypto.getRandomValues`) instead of standard math-based pseudo-random number generators.
- **Dynamic Configuration & Live Updates**:
  - Drag sliders to adjust length from **8 to 64** characters.
  - Granular pool selection: Uppercase, Lowercase, Numbers, and Symbols.
  - Exclude ambiguous/visually similar characters (e.g. `i, l, 1, L, o, 0, O, |`).
  - Enforce duplicate prevention (ensuring unique characters in the password).
  - Enforce presence validation (requiring at least one character from each selected category).
- **Security Metrics & Analytics**:
  - **Live Strength Indicator**: Visual 5-segment meter grading passwords from *Weak* to *Very Strong*.
  - **Shannon Entropy Calculation**: Live mathematical entropy tracking in bits: $E = L \times \log_2(R)$.
  - **Crack Time Estimation**: Real-time evaluation of the time a GPU cluster doing $10^{10}$ guesses/sec would take to brute force.
- **Deduplicated History Panel**: Stores the last 10 copied or explicitly generated passwords in browser **Local Storage** with masking, deletion, and bulk clearing.
- **Dark Mode and System Theme Syncing**: Full support for light, dark, or system preference with smooth color transitions.
- **Accessibility & Responsiveness**: Semantic HTML structure, high-contrast text ratios, full screen-reader support, keyboard focus outlines, and fluid layouts for mobile, tablet, and desktop views.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 19, JavaScript (ES6+), Vite
- **UI & Icon System**: Ant Design 5 (Slider, Switch, Tooltip), Lucide React
- **Styling**: CSS Modules, CSS Variables (Dark/Light mode native mapping)
- **Browser APIs**: Web Crypto API, Clipboard API, Local Storage API

---

## 📂 Project Structure

```
securepass-pro/
├── src/
│   ├── assets/              # Static assets
│   ├── components/          # React components
│   │   ├── common/          # Reusable UI controls (Button, Card, Section)
│   │   ├── Header.jsx       # App logo, title, and theme switcher
│   │   ├── Footer.jsx       # Footer with security disclaimer
│   │   ├── PasswordCard.jsx # Orchestrator card
│   │   ├── PasswordDisplay.jsx # Generated input field & action group
│   │   ├── PasswordOptions.jsx # Pool configurations
│   │   ├── LengthSlider.jsx # Custom Ant Design slider wrapper
│   │   ├── AdvancedOptions.jsx # Duplicate/Ambiguity exclusion toggles
│   │   ├── StrengthMeter.jsx # Visual security score segment bar
│   │   ├── EntropyCard.jsx   # Entropy bit display
│   │   ├── CrackTimeCard.jsx # Crack duration display
│   │   ├── HistoryPanel.jsx  # History controller
│   │   ├── HistoryItem.jsx   # Masked password history rows
│   │   └── Toast.jsx         # Context-based Toast notification system
│   ├── hooks/               # Custom lifecycle hooks
│   │   ├── useLocalStorage.js
│   │   ├── useTheme.js
│   │   ├── usePassword.js
│   │   └── useClipboard.js
│   ├── styles/              # Styling files
│   │   ├── variables.css    # Colors, fonts, transitions
│   │   └── index.css        # Global resets & library overrides
│   ├── utils/               # Logic utilities
│   │   ├── passwordGenerator.js # Cryptographic generator
│   │   ├── entropy.js       # Mathematical entropy logic
│   │   ├── strength.js      # Strength tier evaluator
│   │   ├── timeEstimator.js # Guess-duration estimator
│   │   ├── clipboard.js     # Clipboard fallbacks
│   │   └── storage.js       # LocalStorage safe helpers
│   ├── App.jsx              # Main router/orchestrator
│   ├── App.module.css
│   └── main.jsx             # React DOM renderer
├── index.html               # Entry HTML page
├── vite.config.js           # Vite server settings
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/securepass-pro.git
   cd securepass-pro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🔒 Security Statement

SecurePass Pro performs all generation operations completely client-side in the user's browser. Passwords, options, and histories are saved only inside your local browser storage and are never uploaded, sent, or exposed to any network endpoint or server.

---

## 🚀 Deployment

The project can be deployed easily to **Vercel**:

```bash
npm install -g vercel
vercel
```

---

## 🔮 Future Improvements

- Add custom passphrase generation using the BIP39 word list.
- Support offline progressive web app (PWA) installation.
- Implement master key encryption for the history list.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- test change -->










