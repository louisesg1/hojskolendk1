/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      farvenavn: {
        primary: "#0A1535",
        primaryLight: "#FCF9F3",
        accent: "#FF5900",
        detailDark: "#925238",
        detailLight: "#EDE7DD",
        textdetail: "#C4B9B4",
      },
    },

    /* Tilføj din egen spacing nedenfor */
    // spacing: {
    //   m: "40px",
    // },

    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["Bricolage Grotesque", "sans-serif"],
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      base: ["1rem", { lineHeight: "1.5rem" }],
      large: ["2.5rem", { lineHeight: "3.75rem" }],
      maintext: ["1rem", { lineHeight: "1.5rem" }],
      herotext: ["5rem", { lineHeight: "5.rem" }],
      h1text: ["3.5rem", { lineHeight: "4rem" }],
      h2text: ["3rem", { lineHeight: "4rem" }],
      h3text: ["2rem", { lineHeight: "2.5rem" }],
      h4text: ["1.5rem", { lineHeight: "2.5rem" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    fontWeight: {
      bold: "800",
      semibold: "600",
      regular: "400",
      light: "100",
    },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
