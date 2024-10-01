/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-main": "#8cbc43",
      },
      fontFamily: {
        icons: "Themesion-Base-Icons",
      },
      content: {
        bar: "\\e828",
        close: "\\e813",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, e, theme }) {
      const newUtilities = {};

      // Duyệt qua tất cả các giá trị trong theme.content hoặc định nghĩa thủ công
      Object.entries(theme("content", {})).forEach(([key, value]) => {
        newUtilities[`.${e(`base-icon-${key}`)}::before`] = {
          content: `"${value}"`,
          fontFamily: "Themesion-Base-Icons",
          fontStyle: "normal",
          fontWeight: "normal",
          display: "inline-block",
          textDecoration: "inherit",
          width: "1em",
          marginRight: "0.2em",
          textAlign: "center",
          fontVariant: "normal",
          textTransform: "none",
          lineHeight: "1em",
          marginLeft: "0.2em",
          "-webkit-font-smoothing": "antialiased",
        };
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
