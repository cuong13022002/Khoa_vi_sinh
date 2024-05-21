/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '900px',
      // => @media (min-width: 960px) { ... }

      'lg': '1170px',
      // => @media (min-width: 1440px) { ... }
    },
    backgroundImage: ({
      'slider': "url('../src/img/home/Rectangle93.png')",
      'sliders': "url('../src/img/home/Rectangle150.png')",
      'doccument1': "url('../src/img/active/Document/construction1.png')",
      'doccument2': "url('../src/img/active/Document/construction2.png')",
      'doccument3': "url('../src/img/active/Document/construction3.png')",
      'doccument4': "url('../src/img/active/Document/construction4.png')",
      'doccument5': "url('../src/img/active/Document/construction5.png')",
      'doccument6': "url('../src/img/active/Document/construction6.png')",
      'doccument7': "url('../src/img/active/Document/construction7.png')",
      'doccument8': "url('../src/img/active/Document/construction8.png')",
      'doccument9': "url('../src/img/active/Document/document.png')",
      'list': "url('../src/img/active/Polygon10.png')",
      'news': "url('../src/img/news/Rectangle78.png')",
      'news1': "url('../src/img/news/Rectangle126.png')",
      'news3': "url('../src/img/news/Rectangle125.png')",
      'contact1': "url('../src/img/contact/image3.png')",
      
      
    }),
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat']
      }
    },
  },
  plugins: [],
}

