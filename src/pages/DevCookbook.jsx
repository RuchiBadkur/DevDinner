import React, { useEffect, useState } from 'react';
import { BookOpen, Clock, Braces, ListChecks, Copy, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const formatDate = (ts) => new Date(ts).toLocaleString();

const DevCookbook = () => {
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('devCookbook') || '[]');
    setEntries(saved);
  }, []);

  const deleteEntry = (timestamp) => {
    const updated = entries.filter((e) => e.timestamp !== timestamp);
    setEntries(updated);
    localStorage.setItem('devCookbook', JSON.stringify(updated));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('✅ Code copied to clipboard!');
  };

  const filteredEntries = entries.filter(
    (entry) =>
      entry.dish.toLowerCase().includes(search.toLowerCase()) ||
      entry.appType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50 px-6 py-12 sm:px-10 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className="inline-block bg-orange-100 p-3 rounded-full shadow-md mb-4">
          <BookOpen className="text-orange-600 w-8 h-8" />
        </div>
        <h1 className="text-4xl font-extrabold text-orange-700">📖 Your DevCookbook</h1>
        <p className="text-lg text-gray-700 mt-2">Browse your saved dev recipes & culinary creations.</p>
      </motion.div>

      <div className="mb-8 max-w-md mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search by dish or app type..."
          className="w-full px-4 py-2 rounded-md border border-orange-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
        />
      </div>

      {filteredEntries.length === 0 ? (
        <p className="text-center text-gray-500">No dishes match your search. 🍽️</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {filteredEntries.map((entry, i) => (
            <motion.div
              key={entry.timestamp}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 border border-orange-100 relative"
            >
              <button
                onClick={() => deleteEntry(entry.timestamp)}
                className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                title="Delete entry"
              >
                <Trash2 className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800 mb-1">🍽️ {entry.dish}</h2>
                <p className="text-sm text-gray-500">
                  <Clock className="inline w-4 h-4 mr-1" />
                  {formatDate(entry.timestamp)}
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-orange-700">🛠️ App:</span> {entry.appType}
                </div>
                <div>
                  <span className="font-semibold text-orange-700">🔧 Stack:</span> {entry.techStack}
                </div>
                <div>
                  <span className="font-semibold text-orange-700">💡 Prompt:</span> {entry.prompt}
                </div>
                <div>
                  <span className="font-semibold text-orange-700">📋 Summary:</span>{' '}
                  {entry.summary || 'No summary'}
                </div>
                <div>
                  <span className="font-semibold text-orange-700">
                    <ListChecks className="inline w-4 h-4 mr-1" />
                    Concepts:
                  </span>{' '}
                  {entry.concepts.join(', ')}
                </div>
                <div>
                  <span className="font-semibold text-orange-700">
                    <Braces className="inline w-4 h-4 mr-1" />
                    Focus Concept:
                  </span>{' '}
                  {entry.deepDive?.concept} — {entry.deepDive?.explanation}
                </div>

                <div className="mt-3">
                  <details className="bg-gray-100 rounded-md px-4 py-2">
                    <summary className="cursor-pointer font-semibold">
                      👩‍🍳 View Full Code
                    </summary>
                    <div className="relative mt-3 max-h-72 overflow-auto bg-white border border-gray-200 rounded-md p-3">
                      <button
                        onClick={() => copyToClipboard(entry.fullCode)}
                        className="absolute top-2 right-2 bg-orange-100 text-orange-600 px-2 py-1 text-xs rounded hover:bg-orange-200"
                      >
                        <Copy className="inline w-4 h-4 mr-1" />
                        Copy
                      </button>
                      <pre className="text-xs whitespace-pre-wrap text-gray-700">
                        {entry.fullCode}
                      </pre>
                    </div>
                  </details>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DevCookbook;
