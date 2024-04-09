/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", 'html[class~="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    'theme.config.tsx',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      "loop-scroll": "loop-scroll 30s linear infinite",
    },
    keyframes: {
      "loop-scroll": {
        from: { transform: "translateX(0)" },
        to: { transform: "translateX(-100%)" },
      },
    },
  },
  plugins: [],
}