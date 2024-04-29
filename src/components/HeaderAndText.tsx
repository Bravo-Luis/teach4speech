import { Box, Button, Typography } from "@mui/material";

function HeaderAndText({
  header,
  text,
  link,
  quoted
}: {
  header: string;
  text: string;
  link?: string;
  quoted?: string;
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

      {text && (
        <Typography variant="body1" textAlign={"left"}>
          {text}
        </Typography>
      )}
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
    </Box>
  );
}

export default HeaderAndText;
