/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			xxs: "320px",
			xs: "375px",
			xsl: "400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
			"3xl": "1920px",
			"4xl": "2560px",
			"5xl": "3840px",
			iphone12: "360px",
			iphone12pro: "390px",
		},
	},
	plugins: [],
};
