import { makeStyles } from "@mui/styles";
// import theme from "./Theme";

const useCommonStyles = makeStyles(() => ({
    ColumnCenteredContainer: {
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },

    RowCenteredContainer: {
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
}));

export default useCommonStyles;
