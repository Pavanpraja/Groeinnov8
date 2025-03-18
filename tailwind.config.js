/** @type {import('tailwindcss').Config} */
export const exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // This is Tailwind's default blue-600 color
      },
    },
  },
  plugins: [],
};
