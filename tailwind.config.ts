import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#571244",
        fadedPrimary: "#5712441A",
        secondary: "#EF4353",
        borderColor: "#1515150F",
        subText: "#696969",
        mainText: "#151515",
        inputPlaceholderText: "#6C757D",
      },
      blur: {
        blur: "blur(9.085714340209961px)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        BlogsHeroImage: "url('/images/BlogHeroImage.png')",
        MobileBlogImage: "url('/images/MobileBlogImage.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
