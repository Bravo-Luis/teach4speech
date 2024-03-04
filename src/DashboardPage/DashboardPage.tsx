import { Grid, Paper, Box, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Lottie from 'react-lottie';
import WordCloudAnimation from "../assets/wcloud.json";
import AudioAnimation from "../assets/audio.json";
import { SocketConsumer } from "../SocketProvider";
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

    const defaultOptionsOne = {
        loop: true,
        autoplay: true,
        animationData: WordCloudAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
    };

    const defaultOptionsTwo = {
        loop: true,
        autoplay: true,
        animationData: AudioAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
    };

    return (
        <Paper sx={{ 
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
                    <Box sx={{
                        boxShadow: 5,
                        padding: "20px 30px",
                        borderRadius: 2,
                        height: 350, 
                        width: 350,
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "space-between", 
                    }}>
                        <Typography variant="h4">Related Words </Typography>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Lottie options={defaultOptionsOne} height="100%" width="100%" />
                        </div>
                        <LoadingButton 
                             loading={isLoading}
                            variant="contained"
                            onClick={() => handlePlay("related_words")}
                         >Play</LoadingButton>
                    </Box>

                    <Box sx={{
                        boxShadow: 5,
                        padding: "20px 30px",
                        borderRadius: 2,
                        height: 350, 
                        width: 350, 
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "space-between", 
                    }}>
                        <Typography variant="h4">Audio Sharing (WIP) </Typography>
                        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Lottie options={defaultOptionsTwo} height="100%" width="100%" />
                        </div>
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
        </Paper>
    );
}

export default DashboardPage;
