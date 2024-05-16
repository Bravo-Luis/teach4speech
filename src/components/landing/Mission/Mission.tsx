import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Mission() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10vh",
        width: "100vw",
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
    </Container>
  );
}

export default Mission;
