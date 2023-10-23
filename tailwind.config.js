/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

