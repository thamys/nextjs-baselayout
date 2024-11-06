# Next.js Project with Tailwind, Ant Design, and NextAuth

<p align=“center”>
  <a href=“https://nextjs.org/”><img src=“https://img.shields.io/badge/Next.js-v14.2.6-000?logo=next.js” alt=“Next.js”></a>
  <a href=“https://tailwindcss.com/”><img src=“https://img.shields.io/badge/Tailwind_CSS-2.2-38B2AC?logo=tailwind-css” alt=“Tailwind CSS”></a>
  <a href=“https://ant.design/”><img src=“https://img.shields.io/badge/Ant%20Design-Custom-0170FE?logo=ant-design” alt=“Ant Design”></a>
  <a href=“https://next-auth.js.org/”><img src=“https://img.shields.io/badge/NextAuth-Google_Login-FF4785?logo=nextdotauth” alt=“NextAuth”></a>
  <a href=“https://storybook.js.org/”><img src=“https://img.shields.io/badge/Storybook-v6.5-FF4785?logo=storybook” alt=“Storybook”></a>
</p>

## 📖 Project Description

This is a Next.js application using the `app` folder structure (version 14.2.6), organized with Domain-Driven Design (DDD) and with a separate Design System folder for centralized components (following the Component Centric Architecture concept). Tailwind CSS and Ant Design (with custom themes) are used for styling, and NextAuth handles authentication with Google login. Storybook is set up for visual component documentation and testing.

## 🌟 Features

	•	Authentication with NextAuth and Google login
	•	Design System with Tailwind CSS and Ant Design
	•	Domain-Driven Design for improved organization and scalability
	•	Storybook for visual documentation and component testing

## 📂 Project Structure

	•	app: Application logic organized using DDD.
	•	ui: Separate design system for reusable components.

## 🚀 How to Run the Project

	1.	Clone the repository:
```bash
git clone https://github.com/your-username/project-name.git
```
	2.	Install dependencies:
```bash
npm install
```
	3.	Configure the environment variables as needed (example in `.env.example`).
	4.	Run the development server:
```bash
npm run dev
```
	5.	Open http://localhost:3000 to view the project.

## 📘 `.env` Configuration

```plaintext
# Google Authentication
GOOGLE_ID = ‘’
GOOGLE_SECRET = ‘’

# To obtain GOOGLE_ID and GOOGLE_SECRET:
# 1. Go to https://console.cloud.google.com/
# 2. Create an OAuth 2.0 Client ID
# 3. Set up consent and redirect configurations, then copy the generated values

# NEXTAUTH_SECRET is required for session cookie encryption
# To generate, run in terminal:
# openssl rand -base64 32
NEXTAUTH_SECRET = ‘’
```

## 📚 Running Storybook

To view and test components visually, run:

```bash
npm run storybook
```

## 🤝 Contribution

Contributions are welcome! Feel free to open issues and pull requests.