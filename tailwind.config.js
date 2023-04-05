/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'Violet': '#5E17EB',
        'blue': '#112949',
        'bluDark': '#102845',
        'pink': '#fc5f92',
        'purple': '#bec7ff',
        'DarkPurple': '#130725',
        'moon': '#303234',
      },
      fontFamily: {
        McLaren: ['"McLaren","cursive"'],
        Paytone: ['"Paytone One","sans-serif"'],
        Poppins: ['"Poppins","sans-serif"'],
        Titan: ['"Titan One", "cursive"'],
      },
    },
  },
  plugins: [],
}

