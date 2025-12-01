/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#003366', // Deep Royal Blue
                    light: '#1a4d80',
                    dark: '#001f3f',
                },
                secondary: {
                    DEFAULT: '#C41E3A', // Cardinal Red (Professional Red)
                    light: '#e53e3e',
                    dark: '#9b1c1c',
                },
                accent: '#f56565', // Red for alerts/highlights
                highlight: '#D4AF37', // Metallic Gold for subtle highlights
                neutral: {
                    100: '#f7fafc',
                    200: '#edf2f7',
                    800: '#2d3748',
                    900: '#1a202c',
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                heading: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
