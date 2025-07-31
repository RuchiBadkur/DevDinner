import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const WhyThisMatters = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white px-6 py-12 sm:px-10 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-100 p-3 rounded-full shadow-md">
            <Lightbulb className="text-yellow-600 w-8 h-8" />
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          🧠 Why This Matters
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          This isn’t just a project. It’s a mindset. A reflection of how we, as developers and learners,
          approach creativity, learning, and curiosity. Every line of code, every error debugged, and every
          component styled is a small step toward mastery — and more importantly, toward meaning.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          In a world driven by speed and automation, we pause to savor the *process*. Like a carefully
          curated dish, great learning experiences are not rushed. They’re simmered with thought, flavored with
          patience, and plated with intention. 🍲
        </p>

        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
          Whether you're a beginner or brushing up on fundamentals, this project is a gentle reminder that
          coding is not just solving — it’s *expressing*. It's the art of turning ideas into interfaces.
          Welcome to a journey where code is more than syntax. It's soul.
        </p>
      </motion.div>
    </section>
  );
};

export default WhyThisMatters;
