# 🍽️ DevDinner – Serve Code Like Dishes!

**DevDinner** is a fun, food-themed frontend app that turns your coding concepts into deliciously structured "dish" formats using **Google Gemini API** and **Unsplash**. From prompts to final code, it walks you through a bite-sized recipe of frontend logic in a playful and visual manner.

[🚀 Live Demo](https://devdinner.netlify.app/) &nbsp;&nbsp;|&nbsp;&nbsp; [📂 GitHub Repo](https://github.com/your-username/devdinner)

---

## 🍔 What's on the Menu?

> 🍞 **Prompt** → 🥓 **Full Code** → 🥬 **Concepts** → 🍟 **Deep Dive** → 🍦 **Summary**

Each dish is a complete breakdown of a frontend concept using AI-generated explanations and images, organized like a food recipe. Because learning should be fun AND satisfying!

---

## 📸 Preview

![DevDinner Preview](./public/screenshot.png)

---

## 🛠️ Tech Stack

- **React** + **Vite**
- **Framer Motion** – for smooth animations
- **Tailwind CSS** – for fast UI styling
- **React Icons** – emoji-style icons
- **Google Gemini API** – generates content in JSON format
- **Unsplash API** – serves related images for your code “dishes”
- **localStorage** – to save and revisit your past creations

---

## 🧠 Features

- 🍳 Generate a coding “dish” by simply entering a prompt
- 📸 Get a beautiful Unsplash image based on your dish name
- 🧾 View AI-generated full code, concepts, summary, etc.
- 💾 Save your dish to the DevCookbook (stored locally)
- 🔍 Search through saved dishes
- 📋 Copy the entire dish to your clipboard
- 📱 Fully responsive & mobile-ready
- ⚠️ Error handling with user-friendly messages

---

## 🚧 Project Structure

```bash
src/
├── components/
│   ├── DishOfTheDay.jsx     # Main dish generator logic
│   ├── DevCookbook.jsx      # Saved dish viewer
│   ├── IntroSection.jsx     # Introduction with burger analogy
│   ├── Navbar.jsx           # Top navbar with emoji tooltips
│   └── Footer.jsx           # Footer with credits and links
├── utils/
│   ├── gemini.js            # Google Gemini API setup
│   └── unsplash.js          # Unsplash API fetch logic
├── assets/                  # Static images, logos, etc.
└── App.jsx                  # Main app entry point
```
## 📦 Setup & Installation

```bash
# 1. Clone the repo
git clone https://github.com/your-username/devdinner.git

# 2. Navigate to the project folder
cd devdinner

# 3. Install dependencies
npm install

# 4. Add your environment variables
touch .env

# .env file:
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key

# 5. Start the app
npm run dev

## 📖 Inspiration

This project was inspired by the idea that learning frontend development should feel like assembling your favorite burger — one layer at a time. That’s why each code snippet is served like a meal: visual, structured, and deeply satisfying!

---

## 💡 Future Plans

- 🌍 **User Authentication** (save dishes in cloud)  
- 🧑‍🍳 **Public "Recipe Book"** of shared dishes  
- 🏆 **Badges & gamification** features  
- 🌐 **Internationalization (i18n)**  

---

## 🙋‍♀️ About the Creator

Made with ❤️ by **Ruchi Badkur**  
A self-taught frontend developer who loves UI/UX, storytelling, and of course — coding metaphors 🍕

---

## 📫 Contact

- [LinkedIn](https://www.linkedin.com/in/ruchi-badkur/)   
- [Portfolio](https://whimsical-ruchi-portfolio.netlify.app/)

---
