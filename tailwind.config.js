/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./screens/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-01": "#F2F1F1",
                "color-02": "#1F1F1F",
                "color-03": "#D3EAE7",
                "color-04": "#519ED0",
                "color-05": "#d9dbe0",
                "color-06": "#E8D0E1",
                "color-07": "#DFADCD",
                "color-08": "#D786B6",
                "color-09": "#CE5B9D",
                "color-10": "#E8D0E1",
                "color-11": "#CE5B9D",
            },
        },
    },
    plugins: [],
}