# Lumina — Intelligent Cloud & Telemetry Orchestration

A clean, minimalist landing page and demo application for a fictional cloud orchestration startup. Built with **Laravel 13**, **Inertia.js (React)**, **Tailwind CSS**, and **SQLite**.

This project demonstrates core Laravel architectural patterns—specifically **Routing**, **Controllers**, **Form Requests**, and **Views (Inertia + React)**—using Gemini AI to automate boilerplate scaffolding and accelerate hands-on learning.

---

## 📸 Screenshots

<img width="1901" height="913" alt="Lumina Home Page" src="https://github.com/user-attachments/assets/568ba211-166c-4736-825e-3fd41a2b666c" />

<img width="1902" height="912" alt="Lumina About Page" src="https://github.com/user-attachments/assets/e91cc941-93f0-4530-bff0-4c7f1424fcb7" />

<img width="1900" height="911" alt="Lumina Contact Page" src="https://github.com/user-attachments/assets/8c60bdb6-8372-4103-9450-a86421f6b676" />

---

## ✨ Features & Architecture

- **🧭 Named Routing & Controllers:** Clean separation of concerns with dedicated `HomeController`, `AboutController`, and `ContactController`.
- **🎨 Minimalist Tailwind Design:** Consistent shared layout (`AppLayout.tsx`) with dark mode support, mobile responsive navigation, and refined micro-interactions.
- **💾 SQLite Database Persistence:** Real-time inquiry submissions stored in SQLite via Eloquent models, migrations, factories, and seeders.
- **🔒 Form Request Validation:** Server-side validation with `ContactRequest` providing real-time field error feedback and session flash notifications.
- **⚡ Type Safety:** End-to-end TypeScript types and Laravel Wayfinder action bindings.

---

## 🚀 Quick Start

### 1. Clone & Setup

```bash
git clone https://github.com/your-username/simple_fictional_project.git
cd simple_fictional_project
composer setup
```

### 2. Run the Development Server

```bash
composer run dev
```

### 3. Run Automated Tests

```bash
php artisan test --compact
```
