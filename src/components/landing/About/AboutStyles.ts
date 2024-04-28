import { makeStyles } from "@mui/styles";
import theme from "../../../styles/Theme";

const useAboutStyles = makeStyles(() => ({
  ImpactBubbleStyling: {
    border: "1px solid black",
    borderRadius: "1vw",
    padding: "1vw",
    backgroundColor: theme.palette.primary.light,
  },
  ImpactBubbleCollection: {
    marginTop: "5vh",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2vw",
    maxWidth: "clamp(300px, 80%, 1200px)",
  }
}));

export default useAboutStyles;
