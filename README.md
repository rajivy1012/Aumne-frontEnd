# 🖼️ Frontend – Aumne Assignment (React + Vite)

This is the React-based frontend for the form generation system. It allows users to upload `.txt` files, view generated questions, preview them in form layout, and simulate sharing via email.

---

## ⚙️ Setup Instructions

### 📦 Requirements

* Node.js v18+

### 🔧 Installation

```bash
cd frontend
npm install
```

### 🚀 Start Development Server

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## 🧭 File Structure

```
frontend/
├── src/
│   ├── App.jsx             # Main UI logic
│   ├── FormPreview.jsx     # Question form page
│   └── main.jsx            # Router setup
├── public/
│   └── _redirects          # Vercel SPA route handling
├── index.html
├── vite.config.js
└── package.json
```
## Workflow
![Workflow diagram](https://github.com/user-attachments/assets/cbcfcf28-8560-4756-b343-6214461840a9)

---

## 🧠 Features

* Upload `.txt` file
* Generate questions from backend
* View questions with options
* Click **Approve** to generate `/form-preview` page
* Click **Share** to simulate email (logs to console)

---

## 🔁 Routing Notes (for Vercel / SPA Hosting)

To prevent 404 on deep links:

1. Create `public/_redirects`:

```
/*    /index.html   200
```

2. Rebuild and deploy:

```bash
npm run build
```

---

## 🧪 Simulated Emails

After approval, a "Share" button logs emails to console for these test emails:

* `test1@example.com`
* `test2@example.com`

---

## 🔧 Technologies

* React + Vite
* TailwindCSS
* Framer Motion
* React Router DOM

---

## ✨ Future Enhancements

* Use EmailJS to send actual emails
* Add form response capture and submission handling
