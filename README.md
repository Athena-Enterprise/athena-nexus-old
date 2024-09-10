<h1 align="center">Athena Nexus</h1>

<div align="center">

  <img src="https://img.shields.io/badge/Project-Active-brightgreen" alt="Project Status"/>
  <img src="https://img.shields.io/badge/Contributors-3-blue" alt="Contributors"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License"/>
  
</div>

<p align="center">
<strong>A Discord Bot Management System with Backend and Web Dashboard</strong>
</p>

---

## 📚 Project Overview

**Athena Nexus** is a powerful platform that enables **Discord bot management** via a web dashboard. It combines the power of **Node.js** and **Discord.js** for backend functionality and plans to include a frontend dashboard with **Vue.js** or **React.js**.

This project is organized into three main components:

- **Discord Bot**: A feature-rich bot built with **Discord.js**.
- **Backend**: Manages bot interactions and OAuth2 flow for Discord login.
- **Frontend (Planned)**: A web-based dashboard to manage bot settings and view statistics.

---

## 🚀 Features

- **Discord Bot**: Add the bot to servers via OAuth2, use it for moderation, custom commands, etc.
- **GitHub Webhooks**: Automatically deploy the latest code updates using GitHub Webhooks and PM2.
- **Web Dashboard**: Manage bot settings, toggle features, and view server stats from a user-friendly interface.

---

## 🛠️ Technologies Used

- **Node.js** (Backend)
- **Discord.js** (Bot)
- **Express.js** (API)
- **PM2** (Process Manager)
- **GitHub Webhooks** (Auto-deployment)
- **Vue.js** or **React.js** (Frontend - Planned)

---

## 🏗️ Project Structure

```plaintext
athena-nexus/
│
├── discord-bot/             # Bot code (Discord.js)
│   └── bot.js               # Main bot file
│
├── discord-backend/          # Backend server (Node.js)
│   └── server.js            # Express server handling OAuth2 and Webhooks
│
├── discord-frontend/         # Planned Web Dashboard
│
└── deploy.sh                # Deployment script for auto-updates
```

## 📜 Credits
This project was developed by the Athena Nexus team:
- **ItzDusty**
- **Jakubi**
- **Zeca**

## 📝 License
This project is open-source under the MIT License.
