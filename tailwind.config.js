/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {
            colors: {
                primary: "#bc44dd",
                secondray: "#7e32dc",
            },
        },

        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1200px",
            },
        },
    },
    plugins: [],
};
