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
        fontSize: "6rem",
        fontWeight: "bold",
        color: "white",
        '@media (max-width:1400px)': {
            fontSize: "5rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "3rem",
        }, '@media (max-width:350px)': {
            fontSize: "2rem",
        }
    },
    h2: {
        fontSize: "2.75rem",
        color: "white",
        '@media (max-width:1400px)': {
            fontSize: "2.5rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.5rem",
        }, '@media (max-width:350px)': {
            fontSize: "1rem",
        }
        
    },
    h3: {
        fontSize: "3rem",
        '@media (max-width:1400px)': {
            fontSize: "2.75rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.75rem",
        }
    },
    h4: {
        fontSize: "2.125rem",
        '@media (max-width:1400px)': {
            fontSize: "2rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.5rem",
        }
    },
    h5: {
        fontSize: "1.5rem",
        '@media (max-width:1400px)': {
            fontSize: "1.4rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1rem",
        }
    },
    body1: {
        fontSize: "1.25rem",
        color : "white",
        '@media (max-width:1400px)': {
            fontSize: "1.25rem",
            fontweight: "bold"
        },
        '@media (max-width:1000px)': {
            fontSize: "0.75rem",
        }, '@media (max-width:350px)': {
            fontSize: "0.55rem",
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