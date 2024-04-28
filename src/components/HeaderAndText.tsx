import { Box, Button, Typography } from "@mui/material";

function HeaderAndText({
  header,
  text,
  link,
}: {
  header: string;
  text: string;
  link?: string;
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
      {link ? (
        <>
          <br />
          <Button href={link} variant="outlined">
            <Typography variant="caption" color={"primary"}>
              Learn More
            </Typography>
          </Button>
        </>
      ) : null}
    </Box>
  );
}

export default HeaderAndText;
