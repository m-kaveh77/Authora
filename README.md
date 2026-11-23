# ✦ Authora

### Your Identity, Your World.

<p align="center">
  A modern, elegant, and responsive authentication experience built with React and Tailwind CSS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-Modern-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Formik-Forms-2563EB?style=for-the-badge" alt="Formik" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</p>

---

## ✨ Overview

**Authora** is a modern authentication interface designed to deliver a clean, intuitive, and visually engaging user experience.

Built with React and styled using Tailwind CSS, Authora focuses on simplicity, accessibility, and elegant visual details. Its soft pastel color palette, glass-inspired surfaces, subtle animations, and carefully designed form interactions create a welcoming environment for users.

Whether creating a new account or signing into an existing one, Authora provides a consistent and seamless authentication experience.

> **Your identity, your world.**

---

## 🎨 Design Philosophy

Authora follows a minimal and elegant design language with an emphasis on clarity and visual consistency.

Key design principles:

- **Minimalism:** Clean layouts without unnecessary visual complexity.
- **Soft Aesthetics:** A carefully selected pastel pink color palette.
- **Glassmorphism:** Translucent surfaces and subtle backdrop blur effects.
- **Micro-interactions:** Smooth transitions and subtle hover animations.
- **Responsive Design:** A consistent experience across different screen sizes.
- **User-Centered Forms:** Clear input fields and helpful validation feedback.

### Color Palette

| Color        | Hex       | Purpose                    |
| ------------ | --------- | -------------------------- |
| Background   | `#F9F5F6` | Main background            |
| Soft Pink    | `#F8E8EE` | Secondary surfaces         |
| Light Pink   | `#FDCEDF` | Decorative elements        |
| Rose Pink    | `#F2BED1` | Accent elements            |
| Primary Rose | `#EAA8C0` | Primary actions            |
| Deep Rose    | `#E99CB9` | Gradients and hover states |
| Dark Plum    | `#553747` | Primary typography         |

---

## 🚀 Features

### Authentication Pages

- **Login Page**
  - Email and password fields.
  - Password visibility toggle.
  - Form validation.
  - Remember Me option.
  - Forgot Password link.
  - Registration navigation.

- **Registration Page**
  - Full name and email fields.
  - Password and password confirmation.
  - Password visibility toggle.
  - Terms and Privacy Policy agreement.
  - Form validation.
  - Login navigation.

### User Experience

- Fully responsive authentication layouts.
- Form state management with Formik.
- Schema-based form validation.
- Interactive input focus states.
- Animated background decorations.
- Smooth CSS transitions.
- Modern gradient buttons.
- Consistent visual styling across pages.

---

## 🛠️ Tech Stack

Authora is built using the following technologies:

| Technology                                                                   | Purpose                        |
| ---------------------------------------------------------------------------- | ------------------------------ |
| [React](https://react.dev/)                                                  | Component-based UI development |
| [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Application logic              |
| [Tailwind CSS v4](https://tailwindcss.com/)                                  | Utility-first styling          |
| [React Router](https://reactrouter.com/)                                     | Client-side navigation         |
| [Formik](https://formik.org/)                                                | Form state management          |
| [Yup](https://github.com/jquense/yup)                                        | Schema-based validation        |

---

## 📁 Project Structure

```text
authora/
│
├── public/
│
├── src/
│   ├── pages/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── validations/
│   │   ├── login.js
│   │   └── register.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

Follow these steps to run Authora locally.

### 1. Clone the Repository

```bash
git clone https://github.com/m-kaveh77/authora.git
```

### 2. Navigate to the Project Directory

```bash
cd authora
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal to explore Authora.

---

## 🧭 Application Routes

| Route       | Page     | Description                       |
| ----------- | -------- | --------------------------------- |
| `/`         | Redirect | Redirects users to the login page |
| `/login`    | Login    | Sign in to an account             |
| `/register` | Register | Create a new account              |
| `*`         | Redirect | Redirects unknown routes to login |

---

## 🧩 Form Validation

Authora uses Formik to manage form state and Yup schemas to validate user input.

Validation helps ensure that:

- Required fields are not empty.
- Email addresses follow a valid format.
- Passwords meet the required criteria.
- Password confirmation matches the original password.
- Required agreements are accepted.

Validation feedback is displayed alongside the relevant form fields to help users correct their input.

---

## 🎬 Animations & Styling

Instead of relying on animation libraries, Authora uses CSS animations and Tailwind CSS utilities to create its visual effects.

Some of the visual details include:

- Floating background shapes.
- Fade-in page animations.
- Smooth button hover effects.
- Animated gradient interactions.
- Subtle focus and transition states.

This approach keeps the interface lightweight while maintaining a polished appearance.

---

## 📌 Current Project Status

**Authora is currently a frontend authentication interface.**

The login and registration forms include client-side validation and interactive UI behavior. Actual account creation, authentication, and session management require backend integration.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

If you have an idea that could make Authora better:

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push your branch.
5. Open a Pull Request.

---

## 📄 License

This project is currently available for educational and personal development purposes.

A formal open-source license can be added when the project is ready for public distribution.

---

<p align="center">
  Designed with care. Built with React. ✦
  <br />
  <strong>Authora — Your Identity, Your World.</strong>
</p>
