import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fundo-branco": "url('/borda_foto2.png')",
      },
      colors: {
        "fundo-cinza": "#1B1B1F",
        "red-bt": "#DC5A5A",
        "red-bt-h": "#FF7070",
      },
    },
  },
  plugins: [],
};
export default config;
