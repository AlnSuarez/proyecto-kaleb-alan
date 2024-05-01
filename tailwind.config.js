// tailwind.config.js
const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                light: {
                  primary: {
                    100: '#FF6B6B',
                    200: '#dd4d51',
                    300: '#8f001a',
                  },
                  accent: {
                    100: '#FFCC5C',
                    200: '#946d00',
                  },
                  text: {
                    100: '#1E1E1E',
                    200: '#2d2d2d',
                  },
                  bg: {
                    100: '#FFFFFF',
                    200: '#e0e0e0',
                    300: '#FFFFFF',
                  },
                },
                dark: {
                  primary: {
                    100: '#FF6B6B',
                    200: '#dd4d51',
                    300: '#8f001a',
                  },
                  accent: {
                    100: '#FFCC5C',
                    200: '#946d00',
                  },
                  text: {
                    100: '#FFFFFF',
                    200: '#e0e0e0',
                  },
                  bg: {
                    100: '#1E1E1E',
                    200: '#2d2d2d',
                    300: '#454545',
                  },
                },
              },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
};


