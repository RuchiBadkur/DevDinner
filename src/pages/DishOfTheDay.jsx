// src/pages/DishOfTheDay.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import copy from 'copy-to-clipboard';
import { generateDishContent } from '../utils/gemini';
import SectionDivider from '../components/SectionDivider';

import { Check, Copy } from 'lucide-react';
import pencil from '../assets/pencil.png';
import burger1 from '../assets/burger1.png';
import burger2 from '../assets/burger2.jpg';
import burger3 from '../assets/burger3.png';
import burger4 from '../assets/burger4.png';

const knownDishes = ['Burger', 'Pizza', 'Taco', 'Sushi', 'Pasta', 'Ramen', 'Biryani', 'Salad'];
const fallbackDish = () => knownDishes[Math.floor(Math.random() * knownDishes.length)];

const staticImages = {
  prompt: pencil,
  code: burger1,
  concepts: burger2,
  deepDive: burger3,
  summary: burger4,
};

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

async function fetchUnsplashImage(query) {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&client_id=${UNSPLASH_ACCESS_KEY}&orientation=squarish`
    );
    if (!res.ok || !res.headers.get('content-type')?.includes('application/json')) {
      throw new Error('Unsplash error or rate limit');
    }
    const json = await res.json();
    return json.urls?.regular || null;
  } catch (e) {
    console.error('Unsplash fetch error:', e.message);
    return null;
  }
}

function CopyButton({ textToCopy }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copy(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button onClick={handleCopy} className="text-gray hover:text-black ml-2">
      {copied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
}

const DishOfTheDay = () => {
  const [appType, setAppType] = useState('weather app');
  const [techStack, setTechStack] = useState('React & OpenWeatherMap API');
  const [dishInput, setDishInput] = useState('');
  const [dish, setDish] = useState('Burger');
  const [sectionContent, setSectionContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [images, setImages] = useState(staticImages);
  const [imgLoading, setImgLoading] = useState(false);

  const prompt = `Build a ${appType} using ${techStack} explained like making a ${dish}.`;

  const getValidDish = () => {
    const v = dishInput.trim();
    return v && knownDishes.includes(v) ? v : fallbackDish();
  };

  const loadAllImages = async (dishName) => {
    setImgLoading(true);
    const types = {
      prompt: `${dishName} dish`,
      code: `${dishName} cooked dish`,
      concepts: `${dishName} whole ingredients`,
      deepDive: `${dishName} one ingredient close up`,
      summary: `${dishName} presentation`,
    };
    const results = {};
    await Promise.all(
      Object.entries(types).map(async ([key, q]) => {
        const img = await fetchUnsplashImage(q);
        results[key] = img || staticImages[key];
      })
    );
    setImages(results);
    setImgLoading(false);
  };

  const handleGenerate = async () => {
    const valid = getValidDish();
    setDish(valid);
    setLoading(true);
    setError('');
    setSectionContent(null);

    try {
      await loadAllImages(valid);
      const resp = await generateDishContent(
        `Build a ${appType} using ${techStack} explained like making a ${valid}.`
      );
      setSectionContent(resp);

      const cookbookEntry = {
        timestamp: Date.now(),
        dish: valid,
        appType,
        techStack,
        prompt,
        summary: resp.summary || '',
        concepts: resp.concepts || [],
        deepDive: resp.deepDive || {},
        fullCode: resp.fullCode || '',
      };
      const existing = JSON.parse(localStorage.getItem('devCookbook') || '[]');
      localStorage.setItem('devCookbook', JSON.stringify([cookbookEntry, ...existing]));
    } catch (e) {
      console.error('Gemini error:', e);
      setError(e.message?.includes('rate limit')
        ? '⚠️ Gemini API rate limit exceeded. Please wait a minute.'
        : '❌ Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    {
      key: 'prompt',
      title: '1. Prompt',
      codeTitle: '📟 User Prompt',
      codeDesc: `"${prompt}"`,
      analogy: `✏️ Starting the ${dish}`,
    },
    {
      key: 'code',
      title: '2. Full Code',
      codeTitle: '💻 Full App Code',
      codeDesc: sectionContent?.fullCode || 'Click 🍽️ to generate the recipe.',
      analogy: `🍔 Cooking ${dish}`,
    },
    {
      key: 'concepts',
      title: '3. Concepts Used',
      codeTitle: '📚 Key Concepts',
      codeDesc: sectionContent?.concepts?.join(', ') || 'useState, useEffect...',
      analogy: `🥬 Key ingredients of ${dish}`,
    },
    {
      key: 'deepDive',
      title: '4. Ingredient Deep Dive',
      codeTitle: `🔍 Focus: ${sectionContent?.deepDive?.concept || 'useEffect'}`,
      codeDesc: sectionContent?.deepDive?.explanation || 'Lifecycle and API logic',
      analogy: `🧀 A closer look at ${dish}`,
    },
    {
      key: 'summary',
      title: '5. Final Summary',
      codeTitle: '📋 Recipe Card',
      codeDesc: sectionContent?.summary || 'Summary of prompt & code.',
      analogy: `📦 Plating the ${dish}`,
    },
  ];

  const getAnalogyText = (sec) => {
    if (!sectionContent) return '';
    switch (sec.key) {
      case 'code':
        return `Here’s your ${dish}-flavored logic.`;
      case 'concepts':
        return `These ingredients (${sectionContent.concepts?.join(', ')}) bring the dish to life.`;
      case 'deepDive':
        return `A key flavor is ${sectionContent.deepDive?.concept}`;
      case 'summary':
        return `Dish served! ${appType} built in ${techStack}.`;
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white px-4 md:px-10 py-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-orange-700 mb-4">
          🍽️ Dish of the Day
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Turn dev prompts into tasty app recipes with code & culinary flair.
        </p>
      </motion.div>

      {/* Input Section */}
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 max-w-4xl mx-auto mb-24 border border-orange-100">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">🍳 What are we cooking today?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <InputSection label="App Type" value={appType} setValue={setAppType} listId="app-types" options={['weather app', 'todo app', 'chat app', 'e-commerce app']} />
          <InputSection label="Tech Stack" value={techStack} setValue={setTechStack} listId="tech-stacks" options={['React & Firebase', 'Vue & Supabase', 'Next.js & MongoDB', 'React & OpenWeatherMap API']} />
          <InputSection label="Dish Type" value={dishInput} setValue={setDishInput} listId="dishes" options={knownDishes} />
        </div>
        <div className="mt-4 text-sm text-gray-700">
          🔎 <span className="font-semibold text-orange-600">Prompt:</span> {prompt}
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className={`mt-6 font-semibold py-2 px-6 rounded-full text-white shadow-md flex items-center gap-2 ${
            loading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 hover:scale-105'
          }`}
        >
          {loading ? (
            <>
              <span className="animate-spin h-4 w-4 border-t-2 border-white border-solid rounded-full" />
              Cooking...
            </>
          ) : (
            '🍽️ Cook with Code'
          )}
        </button>
        {error && <p className="mt-4 text-red-600 font-medium">{error}</p>}
      </div>

      {/* Output Sections */}
      <div className="max-w-6xl mx-auto space-y-28">
        {sections.map((s, i) => (
          <div key={s.key}>
            {i !== 0 && <SectionDivider icon="🍽️" />}
            <div className={`flex flex-col-reverse md:flex-row items-start md:items-center gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 md:w-1/2 w-full"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{s.title}</h3>
                <p className="text-sm font-semibold text-orange-600 flex justify-between items-center">
                  {s.codeTitle}
                  {s.key === 'code' && sectionContent?.fullCode && (
                    <CopyButton textToCopy={sectionContent.fullCode} />
                  )}
                </p>
                <pre className="bg-gray-900 text-white text-sm rounded-lg overflow-auto p-4 max-h-[300px] whitespace-pre-wrap shadow-md">
                  <code>{s.codeDesc}</code>
                </pre>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-3 md:w-1/2 w-full text-center"
              >
                {imgLoading ? (
                  <div className="w-[300px] h-[200px] mx-auto bg-gray-200 rounded-xl animate-pulse" />
                ) : (
                  <img
                    src={images[s.key]}
                    alt={s.analogy}
                    loading="lazy"
                    className="w-full max-w-[300px] mx-auto rounded-xl shadow-lg object-cover"
                  />
                )}
                <h4 className="text-lg font-bold text-gray-800">{s.analogy}</h4>
                <p className="text-sm italic text-gray-600">{getAnalogyText(s)}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const InputSection = ({ label, value, setValue, listId, options }) => (
  <div>
    <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full px-4 py-2 border rounded-lg"
      list={listId}
    />
    <datalist id={listId}>
      {options.map((opt) => (
        <option key={opt} value={opt} />
      ))}
    </datalist>
  </div>
);

export default DishOfTheDay;
