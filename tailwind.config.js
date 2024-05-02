module.exports = {
  content: ["./app/*.{html,ts}"],
  theme: {
    colors: {
      darkgreen: "#1E2827",
      black: "#000",
      dark: "#141414",
      white: "#fff",
      gray: "#888888",
      silver: "#B0B0B0",
      milk: "#F6F6F6",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 7px 56px 10px rgba(10,61,55,1);",
        "4xl": "3px 7px 23px -7px rgba(0,0,0,0.24);",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
      },
    },
    plugins: [require("tailwind-scrollbar")],
  },
};
