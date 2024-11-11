/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        pthin:["Poppins-Thin", "san serif"],
        pextralight:["Poppins-ExtraLight", "sans serif"],
        plight:["Poppins-Light","sans serif"],
        pregular:["Poppins-Regular", "sans serif"],
        pmedium:["Poppins-Medium", "sans serif"],
        pblack:["Poppins-Black", "sans serif"],
        namsterdam:["NewAmsterdam-Regular", "sans serif"],
        cono:["ConcertOne-Regular", "sans serif"],
        satisfy:["Satisfy-Regular", "sans serif"],
        lazydog:["LazyDog-Regular", "sans serif"],
        skrapbook:["Skrapbook-Regular", "sans serif"],
        sbold:["Signika-Bold", "sans serif"],
        slight:["Signika-Light", "sans serif"],
        smedium:["Signika-Medium", "sans serif"],
        sregular:["Signika-Regular", "sans serif"],
        ssemibold:["Signika-SemiBold", "sans serif"],
        laibold:["Laila-Bold", "sans serif"],
        lailight:["Laila-Light", "sans serif"],
        laimedium:["Laila-Medium", "sans serif"],
        lairegular:["Laila-Regular", "sans serif"],
        laisemibold:["Laila-SemiBold", "sans serif"]
      }
    },
  },
  plugins: [],
}

