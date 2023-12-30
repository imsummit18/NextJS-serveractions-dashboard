/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // :root {
  //   --bg: #151c2c;
  //   --bgSoft: #182237;
  //   --text: white;
  //   --textsoft: #b7bac1;
  // }
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "gradient-to-t": "linear-gradient(to top, #182237, #253352)",
      }),
      colors: {
        primary: {
          50: "#151c2c",
          100: "#182237",
          200: "#b7bac1",
        },
      },
    },
  },
  plugins: [],
};
