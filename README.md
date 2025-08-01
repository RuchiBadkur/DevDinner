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
- **Lucide Icons** – crisp modern icons
- **Google Gemini API** – generates structured code content
- **Unsplash API** – serves dish-themed images
- **localStorage** – save & revisit your creations
- **Netlify Functions** – secure Gemini API integration

---

## 🧠 Features

- 🍳 Generate a coding “dish” from just a prompt
- 📸 Enjoy Unsplash-powered visuals for each concept
- 💻 Get full working code, concepts, and a summary
- 📋 One-click copy to clipboard
- 💾 Save dishes to your **DevCookbook**
- 🔍 Search through previously saved meals
- ☁️ **Netlify Functions** protect your API keys
- 📱 100% Responsive UI
- ⚠️ Elegant error handling

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
│   ├── gemini.js            # Calls Netlify serverless function
│   └── unsplash.js          # Unsplash image fetcher
├── assets/                  # Static images, logos, etc.
├── App.jsx                  # Main app entry
└── functions/
    └── gemini.js            # Netlify function for Gemini API
```

<section class="max-w-4xl mx-auto p-6">
  <h2 class="text-2xl font-bold mb-4">📦 Setup & Installation</h2>
  <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
<code># 1. Clone the repo
git clone https://github.com/your-username/devdinner.git

# 2. Navigate to the project folder
cd devdinner

# 3. Install dependencies
npm install

# 4. Add your environment variables
touch .env

# .env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
GEMINI_API_KEY=your_gemini_api_key   # Used inside Netlify Function

# 5. Deploy Netlify functions locally
npm run dev</code>
  </pre>

  <div class="bg-yellow-100 text-yellow-800 p-4 rounded mb-6">
    ⚠️ <strong>Accidentally pushed your .env file?</strong><br />
    Immediately delete the exposed key from Gemini/Unsplash dashboard.<br />
    Regenerate a new key and update your <code>.env</code>.<br />
    Add <code>.env</code> to <code>.gitignore</code> (if not already):
  </div>

  <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-6">
<code>.env</code>
  </pre>

  <h2 class="text-2xl font-bold mb-4">🛰️ Netlify Integration</h2>
  <p class="mb-4">
    This app uses <strong>Netlify Functions</strong> to securely call Gemini API without exposing your key in the frontend.
  </p>
  <ul class="list-disc list-inside mb-4">
    <li><code>/netlify/functions/gemini.js</code> contains the serverless logic</li>
    <li>Environment variables are injected securely from Netlify Dashboard</li>
    <li>Update <code>vite.config.js</code> and use proxying if testing locally</li>
  </ul>
  <p class="mb-6">🔒 Your Gemini key is now safe — no longer bundled with frontend!</p>

  <h2 class="text-2xl font-bold mb-4">📖 Inspiration</h2>
  <p class="mb-6">
    DevDinner was born from the idea that learning frontend should feel like assembling a burger — one tasty layer at a time. Instead of boring documentation, you get a structured walkthrough wrapped in metaphor, code, and imagery.
  </p>

  <h2 class="text-2xl font-bold mb-4">💡 Future Plans</h2>
  <ul class="list-disc list-inside mb-6">
    <li>🌍 User Authentication (cloud-saved dishes)</li>
    <li>🧑‍🍳 Public "Recipe Book" to explore others' dishes</li>
    <li>🏆 Gamified badges & contributions</li>
    <li>🌐 Multilingual support (i18n)</li>
  </ul>

  <h2 class="text-2xl font-bold mb-4">🙋‍♀️ About the Creator</h2>
  <p class="mb-2">
    Made with ❤️ by <strong>Ruchi Badkur</strong><br />
    Frontend developer with a passion for UI/UX, storytelling, and coding metaphors 🍕✨
  </p>

  <p class="mt-4">
    📫 Contact: 
    <a href="https://www.linkedin.com/in/ruchi-badkur" class="text-blue-600 underline" target="_blank">LinkedIn</a> |
    <a href="https://your-portfolio-link.com" class="text-blue-600 underline" target="_blank">Portfolio</a>
  </p>
</section>
