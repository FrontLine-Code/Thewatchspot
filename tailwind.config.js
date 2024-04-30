module.exports = {
  content: ["./app/*.{html,ts}"],
  theme: {
    colors: {
      darkgreen: "#1E2827",
      black: "#000",
      dark: "#141414",
      white: "#fff",
    },
    extend: {
      boxShadow: {
        "3xl": "0px 0px 23px -1px rgba(92,153,17,1);",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
      },
    },
    plugins: [],
  },
};
