🔐 SecurePass Pro – Intelligent Password Generator with Entropy Analysis & Security Insights

Generate • Analyze • Secure

SecurePass Pro is a production-grade password generator built with React, Vite, and Ant Design. It uses the Web Crypto API to generate cryptographically secure passwords while providing real-time strength analysis, entropy calculation, customizable security options, and an accessibility-first user experience.

This project was developed as a portfolio application to demonstrate expertise in modern frontend development, secure browser APIs, UI/UX design, and cybersecurity best practices.
---

✨ Key Features

🔑 Password Generation

Generate secure passwords with complete control over password composition.

 Supported Options

• Adjustable password length (8–64 characters)
• Include uppercase letters (A–Z)
• Include lowercase letters (a–z)
• Include numbers (0–9)
• Include special symbols
• Exclude visually similar characters
• Prevent repeated characters
• Regenerate passwords instantly
• Keyboard shortcut support

 Security

• Cryptographically secure random generation
• Uses `crypto.getRandomValues()`
• No use of `Math.random()`
• Passwords are generated entirely within the browser
• No server communication

---

📊 Password Analysis

Every generated password is analyzed instantly.

 Analysis Includes:

• Password strength score
• Entropy calculation
• Character diversity
• Length analysis
• Security recommendations

 Strength Levels:

| Score | Rating |
|--------|---------|
| 0–20 | Weak |
| 21–40 | Fair |
| 41–60 | Good |
| 61–80 | Strong |
| 81–100 | Very Strong |

---

📋 Password History:

SecurePass Pro stores recently generated passwords locally for convenience.

Features include:

• Last 10 generated passwords
• One-click copy
• Clear history option
• Local-only storage
• Never uploaded online

---

🎨 User Experience:

Designed for speed, accessibility, and usability.

Features include:

• Responsive layout:
• Dark mode
• Light mode
• Smooth animations
• Toast notifications
• Instant password regeneration
• Copy to clipboard
• Local preference persistence

---

🔒 Security First:

Security is the primary objective of SecurePass Pro.

 Security Principles

• Browser-side password generation
• No backend processing
• No password transmission
• No analytics on generated passwords
• Uses secure browser APIs
• Local Storage only for user preferences and history

---

🚀 Key Highlights:

• Cryptographically secure password generation
• Real-time password strength meter
• Entropy calculation
• Modern Ant Design interface
• Responsive on desktop, tablet, and mobile
• Accessibility-first implementation
• Dark and light themes
• Keyboard-friendly controls
• Local preference persistence

---

🛠 Technology Stack:

Frontend:

• React
• Vite
• JavaScript (ES6+)
  
 UI Framework:
• Ant Design
• Ant Design Icons

 Styling:

• CSS Modules
• CSS Variables

Browser APIs:

• Web Crypto API
• Clipboard API
• Local Storage API
• Match Media API

Development Tools:

• ESLint
• Prettier
• Git
• GitHub

 Deployment:

• Vercel

---

📂 Project Structure:

```text
SecurePass-Pro/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── PasswordCard/
│   │   ├── StrengthMeter/
│   │   ├── SettingsPanel/
│   │   ├── PasswordHistory/
│   │   └── ThemeToggle/
│   │
│   ├── hooks/
│   │   └── usePassword.js
│   │
│   ├── utils/
│   │   ├── passwordGenerator.js
│   │   ├── entropy.js
│   │   ├── strengthCalculator.js
│   │   └── clipboard.js
│   │
│   ├── constants/
│   │
│   ├── styles/
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── README.md
└── LICENSE
```

---

⚙️ Installation:

Clone the repository

```bash
git clone https://github.com/yourusername/SecurePass-Pro.git
```

Navigate into the project

```bash
cd SecurePass-Pro
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Build production bundle

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

📜 Available Scripts:

| Command | Description |
|----------|-------------|
| `npm install` | Install project dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code using Prettier |
| `npm run test` | Run test suite (if configured) |

---

🚀 Usage:

1. Choose the desired password length.
2. Select the character types to include.
3. Enable optional security settings.
4. Generate a password.
5. Review the strength score and entropy.
6. Copy the password to the clipboard.
7. Generate another password if needed.

---

🧠 Password Generation Algorithm:

The password generator follows these steps:

1. Read user preferences.
2. Build a valid character pool.
3. Generate secure random values using the Web Crypto API.
4. Map random values to characters.
5. Validate password constraints.
6. Calculate entropy.
7. Calculate strength score.
8. Display password and analysis.

---

🔒 Security Architecture

 Randomness:

SecurePass Pro uses:

```
crypto.getRandomValues()
```

instead of:

```
Math.random()
```

This ensures passwords are suitable for security-sensitive applications.

---

Local Processing:

All password generation occurs entirely within the browser.

No passwords are:

• Uploaded
• Logged
• Stored remotely
• Shared with third-party services

---

Local Storage:

Only the following are stored locally:

• Theme preference
• Password generation preferences
• Password history (optional)

Passwords never leave the user's device.

---

♿ Accessibility:

SecurePass Pro is built with accessibility in mind and follows modern WCAG recommendations.

Accessibility Features:

• Full keyboard navigation
• Screen reader compatibility
• Semantic HTML elements
• Proper ARIA labels
• Focus indicators
• High contrast support
• Responsive typography
• Accessible form controls
• Keyboard shortcuts
• Logical tab order
• Color-independent status indicators

---

📈 Performance:

The application is optimized for speed and responsiveness.

Optimizations:

• Vite fast bundling
• Lazy rendering where applicable
• Lightweight component architecture
• Efficient state management
• Memoized calculations
• Optimized password generation
• Minimal bundle size

---

🗺️ Project Roadmap:

Version 1.0 ✅

• Secure password generation
• Password strength meter
• Entropy calculation
• Copy to clipboard
• Password history
• Theme switching
• Local storage

---

Version 1.1:

• Password policy presets
• Improved accessibility
• Custom symbol sets
• Password expiration reminders

---

Version 1.2:

• Passphrase generator
• Password templates
• Import and export history
• Advanced entropy visualization

---

Version 2.0:

• Have I Been Pwned integration
• Password breach detection
• PWA support
• Offline functionality
• Browser extension
• Electron desktop application

---

Future Enhancements:

• Multi-language support
• Cloud synchronization
• Team password policies
• Password sharing (encrypted) 
•QR code export
• Password statistics dashboard
• Custom security profiles

---

🧪 Testing:

Recommended testing includes:

Unit Testing:

• Password generation
• Entropy calculation
• Strength evaluation

Integration Testing:

• Clipboard functionality
• Local storage
• Theme persistence

Accessibility Testing:

• Keyboard navigation
• Screen readers
• Focus management
• Contrast validation

Browser Testing:

• Chrome
• Firefox
• Edge
• Safari

---

🤝 Contributing:

Contributions are welcome.

Getting Started

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/feature-name
```

3. Commit your changes.

```bash
git commit -m "Add feature"
```

4. Push to GitHub.

```bash
git push origin feature/feature-name
```

5. Open a Pull Request.

---

Coding Standards:

Please follow the project's coding conventions:

• Use meaningful component names.
• Write reusable code.
• Follow ESLint rules.
• Format code with Prettier.
• Keep components modular.
• Write descriptive commit messages.

---

📄 License:

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

👨‍💻 Author

Bavya M
Department: B.E. Computer Science and Engineering

Project: Intelligent Password Generator with Entropy Analysis & Security Insights

"Building innovative software through modern engineering principles and best development practices."
