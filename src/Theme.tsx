import { createTheme } from "@mui/material/styles";
import { purple} from "@mui/material/colors";

// Color palette
const palette = {
    primary: {
        main: purple[500],
        medium: purple[300],
        light: purple[100]
    }
}

// Font Sizing
const typography = {
    h1: {
        fontSize: "4.8rem",
        fontWeight: "bold",
        color: "white",
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
        color: "white",
        '@media (max-width:1400px)': {
            fontSize: "2rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.2rem",
        }, '@media (max-width:350px)': {
            fontSize: "0.8rem",
        }
        
    },
    body1: {
        fontSize: "1rem",
        color : "white",
        '@media (max-width:1400px)': {
            fontSize: "1rem",
            fontweight: "bold"
        },
        '@media (max-width:1000px)': {
            fontSize: "0.6rem",
        }, '@media (max-width:350px)': {
            fontSize: "0.44rem",
        }
    },
}


const components = {

        MuiButton: {
            styleOverrides: {
                root:{
                    ...typography.body1,
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "white",
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