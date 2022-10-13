module.exports = {
    content: ["./index.html"],
    theme: {
        fontFamily: {
            sans: ["Poppins", 'Helvetica', 'Arial', 'sans-serif']
        },
        extend: {
            colors: {
                coral: "#E5736Dff",
                linen: "#F2E6D9ff",
                gainsboro: "#ededed",
                jet: "#3A3737ff",
                liver: "#654236",
                rhythm: "#7D82B8",
                lime: "#e6ebd9"
            },
        },
    },
    plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        process.env.NODE_ENV === "production" ? { cssnano: {} } : {},
    ],
};