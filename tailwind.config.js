/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "scarf-blue": "#2a2e55",
        "sea-blue": "#5278a6",
      },
      spacing: {
        "1/7": "14.29%",
        "2/7": "28.57%",
        "3/7": "42.86%",
        "4/7": "57.14%",
        "5/7": "71.43%",
        "6/7": "85.71%",
      },
    },
  },
  plugins: [],
};
