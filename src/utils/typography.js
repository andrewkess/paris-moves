import Typography from "typography"
import noriegaTheme from "typography-theme-noriega"

//another way to create a typography instance, in case you just want a normal Theme
//const typography = new Typography(noriegaTheme)


const typography = new Typography({
    
    //can add these later to make the site smaller if i want to, but let's start with the basics first
    //baseFontSize: "17.25px",
    //baseLineHeight: 1.57,

    //loading in the google fonts
    googleFonts: [
        {
          name: 'Source Code Pro',
          styles: [
            '200',
            '300'
          ],
          name: 'Roboto',
          styles: [
            '300'
          ]
        }
    ]  



  }, noriegaTheme)




export const { scale, rhythm, options } = typography
export default typography