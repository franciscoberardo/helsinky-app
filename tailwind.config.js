module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['Merriweather', 'sans-serif'],
        sans2: ['Nunito', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        acme: ['"Acme"', 'sans-serif'],
        satisfy: ['"Satisfy"', 'cursive'],
      },
      animation: {
        'slide-up': 'slide-up 1.5s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
