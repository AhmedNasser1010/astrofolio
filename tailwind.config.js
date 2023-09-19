/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
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
    },
  },
  plugins: [],
}

