import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: { "2xl": "1400px" }
		},
		fontFamily: {
			sans: ["Readex Pro", ...fontFamily.sans]
		},
		extend: {
			screens: {
				xs: "340px",
				"2xl": "1440px"
			},
			colors: {
				shamrock: {
					50: "#F0FDF8",
					100: "#CDFAEB",
					200: "#9BF4D8",
					300: "#61E7C2",
					400: "#46D5B2",
					500: "#18B490",
					600: "#109176",
					700: "#117460",
					800: "#135C4E",
					900: "#144D42",
					950: "#052E28"
				},
				// for work
				azure: {
					50: "#f3f6fc",
					100: "#e6ecf8",
					200: "#c8d8ef",
					300: "#98b7e1",
					400: "#6090d0",
					500: "#3c73bb",
					600: "#2b5a9e",
					700: "#244780",
					800: "#213e6b",
					900: "#213759",
					950: "#16233b"
				},

				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			}
		}
	}
};

export default config;
