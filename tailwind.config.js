/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'acellus-blue': '#0057B8', // Primary blue for headers/buttons
        'acellus-light': '#E6F0FA', // Light background
        'nonmetal': {
          400: '#f59e0c', // Lighter for hover
          500: '#fbcd8f' // Primary
        },
        'metalloid': {
          400: '#547edc',
          500: '#7496e1'
        },
        'halogen': {
          400: '#3264d1',
          500: '#a2b5e9'
        },
        'alkaline-earth-metal': {
          400: '#bbddFF',
          500: '#ffffff'
        },
        'actinide': {
          400: '#004b77',
          500: '#4b80a4'
        },
        'transition-metal': {
          400: '#3eb5df',
          500: '#92d0e7'
        },
        'lanthanide': {
          400: '#1f398a',
          500: '#8794bd'
        },
        'noble-gas': {
          400: '#EF4445',
          500: '#eac3c7'
        },
        'post-transition-metal': {
          400: '#f7b253',
          500: '#fbd6a7'
        },
        'alkali-metal': {
          400: '#11baf1',
          500: '#19b5c1'
        }
      }
    },
  },
  safelist: [
    {
      pattern: /bg-(nonmetal|noble-gas|alkali-metal|alkaline-earth-metal|metalloid|halogen|post-transition-metal|transition-metal|lanthanide|actinide)-[4-5]00/,
      variants: ['hover'],
    },
  ],
  plugins: [],
};