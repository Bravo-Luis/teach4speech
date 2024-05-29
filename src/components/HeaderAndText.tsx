import { Box, Button, Typography } from "@mui/material";
import ImpactText from "./ImpactText";

function HeaderAndText({
  header,
  text,
  link,
  quoted,
  impact = false,
  game,
  image,
}: {
  header: string;
  text: string;
  link?: string;
  quoted?: string;
  impact?: boolean;
  game?: string;
  image?: string;
}) {
  return (
    <Box
      sx={{
        maxWidth: "clamp(300px, 80vw, 1000px)",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      {header ? (
        <Typography
          variant="h2"
          fontWeight={"bold"}
          gutterBottom
          marginTop={"5vh"}
          textAlign={"center"}
        >
          {header}
        </Typography>
      ) : null}

      {(text && !impact) && (
        <Typography variant="body1" textAlign={"left"}>
          {text}
        </Typography>
      )}
      {(text && impact) && <ImpactText text={text} />}
      <br />
      <br />
    
      {link ? (
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          width: "100%",
          justifyContent:"space-between",
          rowGap: "2.5vh",
        }}>
          <Button href={link} variant="outlined">
            <Typography variant="caption" color={"primary"}>
              Learn More
            </Typography>
          </Button>
          {quoted && 
       <Typography textAlign={"right"} paddingRight={"2.5vw"}>
        <i>{quoted}</i>
       </Typography>
    
        }

        </Box>
      ) : null}

        {game ? (
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap-reverse",
          width: "100%",
          justifyContent:"center",
          rowGap: "2.5vh",
        }}>
          <Button href={link} variant="contained">
            <Typography variant="caption" color={"white"}>
              Play
            </Typography>
          </Button>
        </Box>
      ) : null}

        {image ? (
          <Box sx={{
            
          }}>
            <img src={image} />
          </Box>
        ) : null} 

      
    </Box>
  );
}

export default HeaderAndText;
