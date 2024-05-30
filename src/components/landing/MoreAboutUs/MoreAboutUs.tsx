import { Box, Theme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderAndText from "../../HeaderAndText";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import useCommonStyles from "../../../styles/CommonStyles";
import ProblemGender from "../../../assets/charts/ProblemGender.png"
import InitialProblem from "../../../assets/charts/initialproblem.png";


function MoreAboutUs () {
    const commonClasses = useCommonStyles();
    const gradient = (theme: Theme) => {
      return `linear-gradient(180deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
    };
    const navigate = useNavigate();
  
    const content = [
      {
        id: "Initial Confidence Level Graph",
        header: "Learn More About The Problem",
        text: "Before the Teach4Speech program, students reported an average confidence score of 3 for public speaking on a 1-5 scale. This was notably lower than students’ confidence in small groups and speaking with adults. This disparity in low public speaking confidence in young students motivates our mission behind the Teach4Speech curriculum.",
        image: InitialProblem,
      },
      {
        id: "Initial Confidence Level Graph By Gender",
        header: " ",
        text: "Girls showed significantly lower average confidence in public speaking and small group discussions compared to boys before Teach4Speech. We hope to bridge these gender disparities in Teach4Speech and promote all groups of students, including girls and students of underrepresented backgrounds, to develop their confidence, speech, and communication skills.",
        image: ProblemGender,
      },
    ];
  
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
        <Box
          className={commonClasses.ColumnCenteredContainer}
          sx={{
            background: gradient,
            paddingBottom: "20vh",
          }}
        >
          {content.map((item, index) => (
            <>
              <br id={item.id} />
              <br />
              <HeaderAndText
                key={index}
                header={item.header}
                text={item.text}
                image={item.image}
              />
            </>
          ))}
          <br />
          <br />
        </Box>   
      </Box>
    );
};

export default MoreAboutUs;