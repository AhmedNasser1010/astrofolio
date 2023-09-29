/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./build/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'midnightBlack': '#131313',
        'charcoalGray': '#3F4143',
        'silverSlate': '#717174',
        'mistyGray': '#A3A1A5',
        'lavenderGray': '#CFCED4',
      },
      fontFamily: {
        'openSans': ['Open Sans', 'sans-serif'],
        'horizon': ['Horizon', 'sans-serif'],
        'moonTime': ['moonTime', 'sans-serif'],
        'horizonOutline': ['HorizonOutline', 'sans-serif'],
        'lovelo': ['Lovelo', 'sans-serif'],
      },
			animation: {
				lazyUpToDown: 'lazyUpToDown 500ms ease-in-out',
				lazyDownToUp: 'lazyDownToUp 500ms ease-in-out',
				skewText: 'skewText 300ms linear',
				lazyLogoText: 'lazyLogoText 1000ms ease-in-out',
				lazyWriteText: 'lazyWriteText 3000ms ease-in-out',
				lazyHeroOne: 'lazyHeroOne 1000ms ease-in-out 3500ms',
				lazyHeroTwo: 'lazyHeroTwo 1000ms ease-in-out 3500ms',
				lazyHeroThree: 'lazyHeroThree 1000ms ease-in-out 3500ms',
				lazyRight: 'lazyRight 1000ms ease-in-out',
				lazyDown: 'lazyDown 1000ms ease-in-out',
			},
			keyframes: {
				lazyUpToDown: {
					'0%': {transform: 'translateY(-20%)', opacity: '0'},
					'100%': {transform: 'translateY(0)', opacity: '1'},
				},
				lazyDownToUp: {
					'0%': {transform: 'translateY(20%)', opacity: '0'},
					'100%': {transform: 'translateY(0)', opacity: '1'},
				},
				skewText: {
					'0%': {transform: 'translateX(0) skewX(0)'},
					'100%': {transform: 'translateX(1.5rem) skewX(12deg)'},
				},
				lazyLogoText: {
					'0%': {transform: 'translate(-20px, -20px) scale(1.2)', opacity: '0'},
					'100%': {transform: 'translate(0, 0) scale(1)', opacity: '1'},
				},
				lazyWriteText: {
					'0%': {width: '0'},
					'100%': {width: '64px'},
				},
				lazyHeroOne: {
					'0%': {top: 'calc(100% - 2.5rem)'},
					'100%': {top: 'calc(100% - 2.5rem - 1rem)'},
				},
				lazyHeroTwo: {
					'0%': {top: 'calc(100% - 2.5rem)'},
					'100%': {top: 'calc(100% - 2.5rem - 2rem)'},
				},
				lazyHeroThree: {
					'0%': {top: 'calc(100% - 2.5rem)'},
					'100%': {top: 'calc(100% - 2.5rem - 3rem)'},
				},
				lazyRight: {
					'0%': {transform: 'translateX(-5%)', opacity: '0'},
					'100%': {transform: 'translateX(0)', opacity: '1'},
				},
				lazyDown: {
					'0%': {transform: 'translateY(-10%)', opacity: '0'},
					'100%': {transform: 'translateY(0)', opacity: '1'},
				},
			},
    },
		animationDelay: {
			500: "500ms",
			1000: "1000ms",
			2000: "2000ms",
			3000: "3000ms",
			4000: "4000ms",
			5000: "5000ms",
		},
  },
  plugins: [
		require("tailwindcss-animation-delay"),
	],
}

