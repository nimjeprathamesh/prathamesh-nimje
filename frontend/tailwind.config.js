/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ⚠️ This is critical!
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'picto-primary': '#9929fb',
                'soft-white': '#f9fafb',
            }
        },
    },
    plugins: [],
}