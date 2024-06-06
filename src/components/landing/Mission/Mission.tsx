import { Box, Button, Theme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HeaderAndText from "../../HeaderAndText";
import useCommonStyles from "../../../styles/CommonStyles";
import RacePie from "../../../assets/charts/RacePie.png";
import GenderPie from "../../../assets/charts/genderpie.png"

const gradient = (theme: Theme) => {
  return `linear-gradient(180deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, ${theme.palette.secondary.light}, white)`;
};

function Mission() {
  const navigate = useNavigate();
  const commonClasses = useCommonStyles();

  const content = [
    {
      id: "",
      header: "",
      text: "In our sample, we surveyed 19 students identifying as Black, 108 identify as Hispanic, and 29 identify as White.84% of Black students do not wish to pursue higher education in college. Among White students, nearly half of the sample chose careers with no educational requirements. ",
      image: RacePie,
    },
    {
      id: "",
      header: "",
      text: "Out of the 74 boys and 82 girls in our sample, the vast majority of boys, over 75%, chose careers that require a high school diploma or less education. Alternatively, over 30% of girls wish to pursue degrees higher than a Bachelor’s.",
      image: GenderPie,
    },
  ]

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "90vh",
        paddingTop: "10vh",
        background: gradient,
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
      <Typography variant="h2" fontWeight={"bold"}>
        Our Mission
      </Typography>
      <Typography
        variant="caption"
        sx={{ width: "80vw", padding: "2vw" }}
        fontWeight={"regular"}
      >
        &emsp;&emsp;&emsp;&emsp; Teach4Speech is a program geared at providing 
        elementary and middle school students from low-income and underrepresented 
        backgrounds with speech and communication skills. In equipping students 
        with the tools to find their voice, build confidence, and advocate for 
        themselves, we hope to inspire the next generation of leaders, and open
         opportunities in a community that does not have access to this.
        <br /> &emsp;&emsp;&emsp;&emsp; 
        The first aspect of this program involves implementing this public speaking 
        curriculum in elementary and middle schools, individualized by grade level. 
        This includes a children's book that demonstrates diversity, equity, and inclusion, 
        which is greatly lacking in the literature. The second aspect of this program 
        includes a teacher-training model that allows easy classroom integration to increase
         accessibility. This would involve a video-supplemented curriculum that demonstrates 
         how each lesson should be communicated. To make these lessons accessible to the 
         community, especially for students who have barriers to learning and education, 
         the third aspect of the curriculum involves multiple web-based applications of 
         speech and debate games that our team has developed.
        <br />
        <br />
      </Typography>
        <br />
        <br />
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
}

export default Mission;
