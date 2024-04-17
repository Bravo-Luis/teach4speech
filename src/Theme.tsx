import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Color palette
const palette = {
    primary: {
        main: purple[500],
        medium: purple[300],
        light: purple[100]
    }, background: {
        default: "white",
        paper: "lightgray"
    }

}

// Font Sizing
const typography = {
    h1: {
        fontSize: "4.8rem",
        fontWeight: "bold",
        color: "black",
        '@media (max-width:1400px)': {
            fontSize: "4rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "2.4rem",
        }, '@media (max-width:350px)': {
            fontSize: "1.6rem",
        }
    },
    h2: {
        fontSize: "2.2rem",
        color: "black",
        '@media (max-width:1400px)': {
            fontSize: "2rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.2rem",
        }, '@media (max-width:350px)': {
            fontSize: "0.8rem",
        }
        
    },
    body2 : {
        fontSize: "1.3rem",

        color: palette.primary.main,
        '@media (max-width:1400px)': {
            fontSize: "1.3rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.1rem",
        }, '@media (max-width:350px)': {
            fontSize: "0.9rem",
        }
    },
    body1: {
        fontSize: "1.2rem",
    
        color : "black",
        '@media (max-width:1400px)': {
            fontSize: "1.2rem",
            fontweight: "bold"
        },
        '@media (max-width:1000px)': {
            fontSize: "1rem",
        }, '@media (max-width:350px)': {
            fontSize: "0.8rem",
        }
    },
}


const components = {

        MuiButton: {
            styleOverrides: {
                root:{
                    ...typography.body1,
                    color: 'white',
                    
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: palette.primary.light, 
                    },
                    
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: palette.primary.medium, 
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: palette.primary.main, 
                    },
                },
            },
        },

}


const theme = createTheme({
    palette: palette,
    typography: typography,
    components: components,
  });



export default theme;