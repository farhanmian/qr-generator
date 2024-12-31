import type { Config } from "tailwindcss";

const config: Config = {
  important:true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "btn-primary": "linear-gradient(to right bottom, #8176AF, #C0B7E8)",
        "btn-secondary": "linear-gradient(to right bottom, #221f30, #343045)",
      },
      colors: {
        primary: "#343045",
        primaryDark: "#221f30",
        secondary: "#C0B7E8",
        purpleLight: "#453e61",
        lightBlue: "#1c96c5",
      },
    },
  },
};
export default config;
