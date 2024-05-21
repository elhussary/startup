/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
    theme: {
        extend: {},

        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1200px",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
