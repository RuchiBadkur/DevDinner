import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import pencil from '../assets/pencil.png';
import burger1 from '../assets/burger1.png';
import burger2 from '../assets/burger2.jpg';
import burger3 from '../assets/burger3.png';
import burger4 from '../assets/burger4.png';

const sectionData = [
  {
    title: '1. Prompt',
    codeTitle: '🧾 User Prompt',
    codeDesc: 'User types a prompt like: "Build a weather app that shows current temperature and conditions."',
    analogyTitle: '✏️ Starting to Draw',
    analogyDesc: 'The magical pencil begins sketching the burger — the idea is taking form.',
    img: pencil,
  },
  {
    title: '2. Full Code',
    codeTitle: '💻 Full App Code',
    codeDesc: 'Get complete code for a React-based weather app using OpenWeatherMap API.',
    analogyTitle: '🍔 Assembling the Burger',
    analogyDesc: 'You now see the complete burger — ready to eat, juicy code complete!',
    img: burger1,
  },
  {
    title: '3. Concepts Used',
    codeTitle: '📚 Key Concepts',
    codeDesc: 'useState, useEffect, JSX structure, API call, props.',
    analogyTitle: '🥬 Dissecting the Layers',
    analogyDesc: 'Each layer (bun, lettuce, patty) = one concept (JSX, state, props).',
    img: burger2,
  },
  {
    title: '4. Ingredient Deep Dive',
    codeTitle: '🔍 Focus: useState',
    codeDesc: 'Why useState? How it manages state. When and how to use it effectively.',
    analogyTitle: '🧀 Analyzing Cheese',
    analogyDesc: "Let’s inspect cheese (useState): how it melts in, when it's added, how it binds everything.",
    img: burger3,
  },
  {
    title: '5. Final Summary',
    codeTitle: '📋 Recipe Card',
    codeDesc: 'Summarize the code + key concepts + what was learned.',
    analogyTitle: '📦 Packing the Meal',
    analogyDesc: 'You wrap the burger with a label: ingredients, calories, reviews — complete understanding!',
    img: burger4,
  },
];

const SectionDivider = ({ icon }) => (
  <div className="flex justify-center items-center my-16">
    <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-orange-300 to-transparent relative">
      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-3 text-xl">
        {icon}
      </span>
    </div>
  </div>
);

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <header className="text-center py-20 bg-gradient-to-b from-orange-100 to-white px-4 md:px-8">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          🍽️ DevDinner: Cook with Code
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          DevDinner helps web developers turn boring projects into flavorful
          learning meals — served hot with real-world analogies, explained
          concepts, and your personal dev cookbook!
        </motion.p>
        <motion.button
          onClick={() => navigate('/dish-of-the-day')}
          className="mt-10 px-7 py-3 text-lg font-medium bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Start Learning While Building →
        </motion.button>
      </header>

      {/* Dish of the Day */}
      <section className="bg-white py-20 px-4 md:px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">🍔 Dish of the Day</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Build a weather app using React & API calls — explained like making a burger.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-28">
          {sectionData.map((s, i) => (
            <div key={i}>
              {i !== 0 && <SectionDivider icon="🍽️" />}
              <div className={`flex flex-col-reverse md:flex-row items-center gap-10 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Left Side: Code Explanation */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4 md:w-1/2 w-full text-center md:text-left"
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{s.title}</h3>
                  <div>
                    <p className="text-sm font-semibold text-orange-600">{s.codeTitle}</p>
                    <p className="text-base text-gray-700">{s.codeDesc}</p>
                  </div>
                </motion.div>

                {/* Right Side: Visual Analogy */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-3 md:w-1/2 w-full text-center"
                >
                  <img
                    src={s.img}
                    alt={s.analogyTitle}
                    className="w-full max-w-[260px] md:max-w-[300px] mx-auto rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  />
                  <h4 className="text-lg font-bold text-gray-800">{s.analogyTitle}</h4>
                  <p className="text-sm text-gray-600">{s.analogyDesc}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DevCookbook CTA */}
      <section
        onClick={() => navigate('/dev-cookbook')}
        className="bg-orange-50 text-center py-20 px-6 cursor-pointer hover:bg-orange-100 transition"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          📖 Your DevCookbook
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Save your projects + notes + explanations in one place.
        </motion.p>
      </section>

      {/* Why This Matters CTA */}
      <section
        onClick={() => navigate('/why-this-matters')}
        className="bg-white text-center py-20 px-6 cursor-pointer hover:bg-gray-50 transition"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          🧠 Why This Matters
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Stop copy-pasting. Start understanding.
        </motion.p>
      </section>

      <div id="learn" className="h-20 md:h-32" />
    </div>
  );
};

export default Intro;
