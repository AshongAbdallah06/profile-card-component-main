/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				dcyan: "hsl(185, 75%, 39%)",
				ddesaturatedblue: "hsl(229, 23%, 23%)",
				dgrayishblue: "hsl(227, 10%, 46%)",
				dgray: "hsl(0, 0%, 59%)",
			},
			fontFamily: {
				kumbhsans: "Kumbh Sans, sans-serif",
			},
			screens: {
				sd: { max: "350px" },
			},
		},
	},
	plugins: [],
};
