import { Drawer, Typography, Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [screenwidth, setScreenwidth] = useState(window.innerWidth);
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();
    const [yPos, setYPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setYPos(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setScreenwidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {screenwidth <= 1080 ? (
                <MenuIcon
                    onClick={() => setOpenDrawer(!openDrawer)}
                    sx={{
                        position: "absolute",
                        top: "clamp(30px, 2vh, 5%)",
                        left: "clamp(30px, 2vw, 5%)",
                        color: "black",
                        scale: "2",
                        cursor: 'pointer'
                    }}
                />
            ) : null}

            {screenwidth > 1080 ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 'clamp(10px, 5vw, 200px)',
                    width: "100vw",
                    position: "fixed",
                    top: "0",
                    margin: "0",
                    padding: "2vh",
                    borderRadius: '0px',
                    boxShadow: `0px 0px ${Math.min(yPos * 0.01, 4)}px -2px black`,
                    background: 'white',
                    zIndex: 100,
                }}>
                    <Box sx={{
                        paddingLeft: 'clamp(10px, 1vw, 200px)',
                        marginLeft: 'clamp(10px, 1vw, 200px)',
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                        <a href="#home">
                            <img
                                src='pdfs/T4S.png'
                                alt='Teach4Speech Logo'
                                style={{
                                    marginTop: '-20px',
                                    marginBottom: '-40px',
                                    marginRight: '-3px',
                                    marginLeft: '-25px',
                                    width: screenwidth <= 800 && screenwidth > 700 ? '120px' : '150px',
                                    height: screenwidth <= 800 && screenwidth > 700 ? '64px' : '80px'
                                }}>
                            </img>
                        </a>
                    </Box>
                    <Box sx={{
                        gap: 'clamp(10px, 5vw, 200px)',
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                    }}>
                        <NormalButton href={"#Goal"} label={"Goal"} />
                        <NormalButton href={'#Why Teach4Speech'} label={'The "Why"'} />
                        <NormalButton href={"#ImpactMessage"} label={"Impact"} />
                        <NormalButton href={"#Curriculum"} label={"Curriculum"} />
                        <NormalButton href={"#Games"} label={"Games"} />
                        <NormalButton href={"#Team"} label={"Team"} />
                        <NormalButton href={'https://forms.gle/iGcuqsF9ce7HKCqQ7'} label={"Join Us"} />
                    </Box>
                    <Button variant='contained' sx={{
                        marginRight: 'clamp(10px, 1vw, 200px)',
                        marginLeft: 'clamp(10px, 1vw, 200px)',
                        paddingRight: 'clamp(10px, 1vw, 200px)',
                        paddingLeft: 'clamp(10px, 1vw, 200px)',
                    }} onClick={() => navigate('/redirect')}>
                        <Typography variant="caption" color={"white"}> Play </Typography>
                    </Button>
                </Box>
            ) : (
                <Drawer onClose={() => setOpenDrawer(false)} open={openDrawer} anchor="top">
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <MobileButton href={"#Goal"} label={"Goal"} />
                        <MobileButton href={"#Impact"} label={"Impact"} />
                        <MobileButton href={"#Curriculum"} label={"Curriculum"} />
                        <MobileButton href={"#Team"} label={"Team"} />
                        <MobileButton href={'https://forms.gle/iGcuqsF9ce7HKCqQ7'} label={"Join Us"} />
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
                            <Button variant='contained' onClick={() => {
                                setOpenDrawer(false);
                                navigate('/redirect');
                            }}>
                                <Typography variant="caption" color={"white"}> Play </Typography>
                            </Button>
                        </Box>
                    </Box>
                </Drawer>
            )}
        </>
    );
}

interface NavButton {
    href: string;
    label: string;
    bold?: boolean;
}

function MobileButton({ href, label }: NavButton) {
    return (
        <a style={{
            textDecoration: 'none',
            textAlign: 'center',
            padding: '1vh',
            background: 'white',
            borderBottom: '1px solid black',
        }} href={href}>
            <Typography variant="caption"> {label} </Typography>
        </a>
    );
}

function NormalButton({ href, label, bold = false }: NavButton) {
    return (
        <a href={href} style={{
            textDecoration: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap'
        }}>
            <Typography variant="caption" fontWeight={bold ? "bold" : ""}>
                {label}
            </Typography>
        </a>
    );
}

export default Navbar;
