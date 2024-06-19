import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useCommonStyles from "../../../styles/CommonStyles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function WhyUs() {
    const commonClasses = useCommonStyles();
    const navigate = useNavigate();

    return (
        <Box className={commonClasses.ColumnCenteredContainer}>
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
        </Box>
    );
}


export default WhyUs;