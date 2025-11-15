// Replace with your actual Gemini API key
// Get it from: https://makersuite.google.com/app/apikey
export const GEMINI_API_KEY = "AIzaSyAVxyYX-kXrvMzx4HobqfpTaH8g8kcMK1k";

export const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
// For production, use environment variables
export const getApiUrl = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || GEMINI_API_KEY;
  return `${GEMINI_API_URL}?key=${apiKey}`;
};

