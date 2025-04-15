const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "You only live once, but if you do it right, once is enough. - Mae West",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Get busy living or get busy dying. - Stephen King",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. - Brian Tracy",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only impossible journey is the one you never begin. - Tony Robbins",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "Act as if what you do makes a difference. It does. - William James",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "You cannot shake hands with a clenched fist. - Indira Gandhi",
  "The mind is everything. What you think you become. - Buddha",
  "The best revenge is massive success. - Frank Sinatra",
];

const usedIndexes = new Set();
const quoteTag = document.getElementById("quote");

function generateQuote() {
  if (usedIndexes.size === quotes.length) {
    alert("All quotes have been used. Resetting the list.");
    usedIndexes.clear(); // Reset the used indexes if all quotes have been displayed
  }
  while (true) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    if (usedIndexes.has(randomIndex)) {
      continue; // Skip if the quote has already been used
    }

    const quote = quotes[randomIndex];
    quoteTag.innerHTML = quote;
    usedIndexes.add(randomIndex); // Mark this quote as used
    break; // Exit the loop after displaying a new quote
  }
}
