/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		fontFamily: {
			'mono': ['JetBrains Mono','Space Mono', 'monospace']
		},
		extend: {
			    typography: (theme) => ({
			      DEFAULT: {
				css: {
				  maxWidth: 'none',
},
},
}),
			colors: {
				bgColor: "var(--theme-bg)",
				textColor: "var(--theme-text)",
				textColorTwo: "var(--theme-text-2)",
				link: "var(--theme-link)",
				accent: "var(--theme-accent)",
				"accent-3":  "var(--theme-accent-3)",
				"accent-2": "var(--theme-accent-2)",
				surface: "var(--theme-surface)",
				quote: "var(--theme-quote)",
				highlight: "var(--theme-highlight)"
			},
		      maxWidth: {
        '8xl': '88rem',  // 1408px
        '9xl': '96rem',  // 1536px
      }
    }
  },	plugins: [
		require('@tailwindcss/typography'),
	],
}
