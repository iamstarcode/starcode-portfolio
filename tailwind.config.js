module.exports = {
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      backgroundColor: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
        tertiary: "var(--color-primary)",
        subtle:"var(--subtle-color)",
        "special-bg":"var(--special-bg-color)",
        light:"var(--light-color)",
        "base-100":"var(--base-100)",
        shadow:"var(--shadow-color)"
      },
      textColor: {
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        tertiary: "var(--color-primary)",
        special:"var(--special-color)",
        "text-color":"var(--text-color)"
      }
    },
  },
  plugins: [],
}
