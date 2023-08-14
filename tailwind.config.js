/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily:{
      SpaceMonoBold: 'SpaceMonoBold',
      SpaceMonoRegular: 'SpaceMonoRegular'
    },
    extend: {
      colors:{
        VeryDarkDyan: 'hsl(183, 100%, 15%)',
        DarkGrayishCyan: 'hsl(186, 14%, 43%)',
        GrayishCyan: 'hsl(184, 14%, 56%)',
        LightGrayishCyan: 'hsl(185, 41%, 84%)',
        VeryLightGrayishCyan: 'hsl(189, 41%, 97%)',
        White: 'hsl(0, 0%, 100%)',
        StrongCyan: 'hsl(172, 67%, 45%)'
      }
    },
  },
  plugins: [],
}

