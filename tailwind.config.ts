import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        darkgrid: "url('/gridbackground2.jpeg')",
        lightgrid: "url('/gridbackground5.avif')",
        garage: "url('/garage.jpg')",
        garagelight: "url('/garage_light.jpeg')",
      },
      fontFamily: {
        serif: ["PT Serif", "serif"],
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      screens: {
        xxs: "240px",
        xs: "420px",
        750: "750px",
      },
    },
  },
  plugins: [],
};
export default config;
