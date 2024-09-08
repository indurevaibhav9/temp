/** @type {import('tailwindcss').Config} */
/** @type {import('rippleui').Config} */
module.exports = {
  rippleui: {
    themes: [
      {
        themeName: "light",
        colorScheme: "light",
        colors: {
          primary: "#ED6A5A",
          backgroundPrimary: "#FFFFFF",
          secondary: "#FFFFFF",
        },
      },
      // Explicitly overriding the darkTheme in RippleUI as it breaks if system theme is dark.
      {
        themeName: "dark",
        colorScheme: "light",
        colors: {
          primary: "#ED6A5A",
          backgroundPrimary: "#FFFFFF",
          secondary: "#FFFFFF",
        },
      }
    ]
  },
  content: [
    "./src/**/*.{html,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'primary': ['#ED6A5A']
      },
      fontFamily: {
        'primary': ["sansita-one", "sans-serif"],
        'secondary': ["merriweather", "sans-serif"]
      }
    },
  },
  plugins: [require("rippleui")],
}

