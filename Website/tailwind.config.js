module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                fadeIn: "fadeIn 0.5s ease-in forwards",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
            },
        },
        colors: {
            dark: "#1a1a1a",
            pink: "#F787D7",
            white: "#FCFCFC",
        },
        fontFamily: {
            title: ["Montserrat"],
            subtitle: ["Oxygen"],
        },
        variants: {
            animation: ["motion-safe"],
        },
    },
    plugins: [],
};
