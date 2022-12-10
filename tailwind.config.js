/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#33a9fe",
                   
          "secondary": "#053f5c",
                   
          "accent": "#EA4F32",
                   
          "neutral": "#1f2937",
                   
          "base-100": "#000000",
                   
          "info": "#ff8e00",
                   
          "success": "#ffff",
                   
          "warning": "#f3f4f6",
                   
          "error": "#f3f4f6",
                   },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
