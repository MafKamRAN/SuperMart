/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("range", "@media (min-width: 768px) and (max-width: 1024px)");
    },
  ],
};
