import { Grid, Container, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { SocketConsumer } from "../utils/SocketProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function DashboardPage() {

    const socket = SocketConsumer();
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false);

    const handlePlay = (game_name: String) => {
        if (!socket.isConnected()){
            console.log("Socket not connected... trying to connect.");
            socket.connect();
        }

        socket.off('game_created_successfully');
        socket.off('game_creation_failed')

        setIsLoading(true);
        socket.emit('create_game', game_name);
        socket.on('game_created_successfully', (game_code: String) => {
            setIsLoading(false);
            navigate(`/host/${game_name}/${game_code}`);
        });

        socket.on('game_creation_failed', (error: String) => {
            setIsLoading(false);
            console.log(error);
        })
    }



    return (
        <Container sx={{ 
            minHeight: "100vh",
            padding: 5,
        }} >
            <Typography variant="h2" p={2}>
                Instructor Dashboard
            </Typography>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                minHeight={"80vh"}
                style={{ height: "95%" }}
            >
                <Grid
                    item
                    xs={12}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2.5,
                        flexWrap: "wrap"
                    }}
                >
                    <Box 
                    sx={{
                        boxShadow: 5,
                        padding: "20px 30px",
                        borderRadius: 2,
                        gap: '2vh',
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "space-between", 
                        border: (theme) => `2px solid ${theme.palette.primary.main}`, 
                    }}>
                        <Typography variant="h4">Related Words </Typography>
                        <LoadingButton 
                             loading={isLoading}
                            variant="contained"
                            onClick={() => handlePlay("related_words")}
                         >Play</LoadingButton>
                    </Box>

                    <Box 
                    sx={{
                        boxShadow: 5,
                        padding: "20px 30px",
                        borderRadius: 2,
                        gap: '2vh',
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "space-between", 
                        border: (theme) => `2px solid ${theme.palette.primary.main}`, 
                    }}>
                        <Typography variant="h4">Audio Sharing (WIP) </Typography>
                        <LoadingButton 
                            loading={isLoading}
                            variant="contained"
                            onClick={() => handlePlay("audio_sharing")}
                        >
                            Play 
                        </LoadingButton>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default DashboardPage;
