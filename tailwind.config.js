/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./dist/**/*.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          github: {
            light: '#f6f8fa',
            dark: '#333',
            primary: '#0366d6',
            secondary: '#586069',
          },
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'],
          mono: ['SFMono-Regular', 'Menlo', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  