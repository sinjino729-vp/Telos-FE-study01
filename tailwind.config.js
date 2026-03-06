/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {

      colors: {
        branding: {
          100: "#FFFAF5",
          200: "#FFE1BF",
          300: "#F9CD9C",
          400: "#FFB35C",
          500: "#FE9D27",
          600: "#E8840F",
          700: "#C76A00",
          800: "#9E5300",
          900: "#6B3900",
        },
        secondaryWarm: "#FDC435",
        secondaryCool: "#26A5B9",
        neutral: {
          100: "#FDFDFD",
          200: "#F3F4F6",
          300: "#E5E7EB",
          400: "#D1D5DB",
          500: "#9CA3AF",
          600: "#6B7280",
          700: "#4B5563",
          800: "#1F2937",
          900: "#111827",
        },
      },

      fontSize: {
        hero: ["48px", { lineHeight: "1.2" }],
        h1: ["31px", { lineHeight: "1.3" }],
        h2: ["25px", { lineHeight: "1.4" }],
        h3: ["20px", { lineHeight: "1.4" }],

        bodylg: ["18px", { lineHeight: "1.6" }],
        body: ["16px", { lineHeight: "1.7" }],
        bodysm: ["13px", { lineHeight: "1.6" }],

        caption: ["12px", { lineHeight: "1.4" }],

        btnm: ["15px", { lineHeight: "1.4" }],
        btns: ["13px", { lineHeight: "1.4" }],
      },

      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },

      boxShadow: {
        card: "0 8px 20px rgba(0,0,0,0.06)",
        header: "0 4px 4px rgba(0,0,0,0.25)",
      }

    }
  },

  plugins: [],
};