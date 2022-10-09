module.exports = {
    content: ["./index.html"],
    theme: {
        fontFamily: {
            sans: ["Poppins", 'Helvetica', 'Arial', 'sans-serif']
        },
        extend: {
            colors: {
                lime: "#e6ebd9",
            },
        },
    },
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        process.env.NODE_ENV === "production" ? { cssnano: {} } : {},
    ],
};