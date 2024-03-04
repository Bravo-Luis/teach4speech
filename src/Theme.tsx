import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Color palette
const palette = {
    primary: {
        main: purple[500],
    }
}

// Font Sizing
const typography = {
    h1: {
        fontSize: "6rem",
        '@media (max-width:1400px)': {
            fontSize: "5.5rem",
        },
        '@media (max-width:600)': {
            fontSize: "3.5rem",
        }
    },
    h2: {
        fontSize: "3.75rem",
        '@media (max-width:1400px)': {
            fontSize: "3.5rem",
        },
        '@media (max-width:600)': {
            fontSize: "3rem",
        }
    },
    h3: {
        fontSize: "3rem",
        '@media (max-width:1400px)': {
            fontSize: "2.75rem",
        },
        '@media (max-width:600)': {
            fontSize: "1.75rem",
        }
    },
    h4: {
        fontSize: "2.125rem",
        '@media (max-width:1400px)': {
            fontSize: "2rem",
        },
        '@media (max-width:600)': {
            fontSize: "1.5rem",
        }
    },
    h5: {
        fontSize: "1.5rem",
        '@media (max-width:1400px)': {
            fontSize: "1.4rem",
        },
        '@media (max-width:600)': {
            fontSize: "1rem",
        }
    },
    body1: {
        fontSize: "1.25rem",
        '@media (max-width:1400px)': {
            fontSize: "1.15rem",
        },
        '@media (max-width:600)': {
            fontSize: "0.8rem",
        }
    },
}



const theme = createTheme({
    palette: palette,
    typography: typography,
  });



export default theme;