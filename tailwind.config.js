/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // For Vite
    "./src/**/*.{js,jsx,ts,tsx}", // For React components
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        heartbeat: "heartbeat 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
