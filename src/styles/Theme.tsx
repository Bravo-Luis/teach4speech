import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { PaletteOptions } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";

interface CustomPaletteOptions extends PaletteOptions {
    primary: {
        main: string;
        medium: string;
        light: string;
    };
    secondary: {
        main: string;
        light: string;
    };
    background: {
        default: string;
        paper: string;
    };
}

declare module "@mui/material/styles/createPalette" {
    interface PaletteColor {
      medium?: string;
    }
  }

  declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        caption1: true;
    }
}

  declare module "@mui/material/styles/createTypography" {
    interface TypographyOptions {
        caption1?: {
            fontSize: string;
            color: string;
            [key: string]: any;
        };
    }

    interface Typography {
        caption1?: {
            fontSize: string;
            color: string;
            [key: string]: any;
        };
    }
}


interface CustomTypographyOptions extends TypographyOptions {
    h1: {
        fontSize: string;
        fontWeight: string;
        color: string;
        [key: string]: any;  // Allow media queries
    };
    h2: {
        fontSize: string;
        color: string;
        [key: string]: any;  // Allow media queries
    };
    body2: {
        fontSize: string;
        color: string;
        [key: string]: any;  // Allow media queries
    };
    body1: {
        fontSize: string;
        color: string;
        [key: string]: any;  // Allow media queries
    };
    caption: {
        fontSize: string;
        color: string;
        [key: string]: any;  // Allow media queries
    };
    caption1: {
        fontSize: string;
        color: string;
        [key: string]: any;  // Allow media queries
    };
}

const palette: CustomPaletteOptions = {
    primary: {
        main: purple[500],
        medium: purple[300],
        light: purple[100],
    },
    secondary: {
        main: "#CBC3E3",
        light: "#EDE7F6",
    },
    background: {
        default: "white",
        paper: "lightgray"
    }
};

const typography: CustomTypographyOptions = {
    h1: {
        fontSize: "4.8rem",
        fontWeight: "bold",
        color: "black",
        '@media (max-width:1400px)': {
            fontSize: "4rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "2.4rem",
        },
        '@media (max-width:350px)': {
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
        },
        '@media (max-width:350px)': {
            fontSize: "0.8rem",
        }
    },
    body2: {
        fontSize: "1.3rem",
        color: palette.primary.main,
        '@media (max-width:1400px)': {
            fontSize: "1.3rem",
        },
        '@media (max-width:1000px)': {
            fontSize: "1.1rem",
        },
        '@media (max-width:350px)': {
            fontSize: "0.9rem",
        }
    },
    body1: {
        fontSize: "1.2rem",
        color: "black",
        '@media (max-width:1400px)': {
            fontSize: "1.2rem",
            fontWeight: "bold"
        },
        '@media (max-width:1000px)': {
            fontSize: "1rem",
        },
        '@media (max-width:350px)': {
            fontSize: "0.8rem",
        }
    },
    caption: {
        fontSize: "1.2rem",
        color: "black",
        '@media (max-width:1400px)': {
            fontSize: "1rem",
            fontWeight: "bold"
        },
        '@media (max-width:1000px)': {
            fontSize: "1rem",
        },
        '@media (max-width:350px)': {
            fontSize: "1rem",
        }
    },
    caption1: {
        fontSize: "0.8rem",
        color: "black",
        '@media (max-width:1400px)': {
            fontSize: "0.8rem",
            fontWeight: "bold"
        },
        '@media (max-width:1000px)': {
            fontSize: "0.7rem",
        },
        '@media (max-width:350px)': {
            fontSize: "0.6rem",
        }
    }
};

const components = {
    MuiButton: {
        styleOverrides: {
            root: {
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
};

const theme = createTheme({
    palette,
    typography,
    components,
});

export default theme;
