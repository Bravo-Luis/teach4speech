import { Box, Button, Theme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useCommonStyles from "../../../styles/CommonStyles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HeaderAndText from "../../HeaderAndText";
import ImpactText from "../../ImpactText";
import RacePie from "../../../assets/charts/RacePie.png";
import GenderPie from "../../../assets/charts/GenderPie.png"

function WhyUs() {
    const commonClasses = useCommonStyles();
    const navigate = useNavigate();
    const gradient = (theme: Theme) => {
        return `linear-gradient(180deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
      };

    return (
        <Box 
            className={commonClasses.ColumnCenteredContainer}
            sx={{
                background: gradient,
                paddingBottom: "20vh",
              }}
            >
            <Button
                startIcon={
                    <ArrowBackIosIcon
                        sx={{
                            width: "clamp(12px, 2vw, 24px)",
                        }}
                    />
                }
                sx={{
                    position: "absolute",
                    top: "2vh",
                    left: "2vw",
                    color: "black",
                }}
                onClick={() => {
                navigate("/");
                }}
                variant="outlined"
                color="primary"
            >
                Back
            </Button>

            <HeaderAndText header="Why Teach4Speech?" text="" link=""></HeaderAndText >
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems:"center", justifyContent:"center", gap:"2.5vw", padding:"2.5vw" }}>
                <img
                src={RacePie}
                alt="Pie Chart by Race"
                style={{ 
                    maxWidth: "600px", 
                    minWidth: "270px",
                    border: "1px solid black",
                    padding: "16px",
                    borderRadius: "16px",
                    width: "clamp(200px, 80%, 800px)",
                }}
                />
                <ImpactText text="In our sample, we surveyed 19 students identifying as Black, 108 identify as Hispanic, and 29 identify as White. 84% of Black students do not wish to pursue higher education in college. Among White students, nearly half of the sample chose careers with no educational requirements."/>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap-reverse", alignItems:"center", justifyContent:"center", gap:"2.5vw", padding:"2.5vw" }}>
                <ImpactText text="Out of the 74 boys and 82 girls in our sample, the vast majority of boys, over 75%, chose careers that require a high school diploma or less education. Alternatively, over 30% of girls wish to pursue degrees higher than a Bachelor’s."/>
                <img
                    src={GenderPie}
                    alt="Confidence Levels of Hispanic Students"
                    style={{ 
                        maxWidth: "600px", 
                        minWidth: "270px",
                        border: "1px solid black",
                        padding: "16px",
                        borderRadius: "16px",
                        width: "clamp(200px, 80%, 800px)",
                    }}
                />
            </Box>

        </Box>
    );
}


export default WhyUs;