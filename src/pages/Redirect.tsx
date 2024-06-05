import { Box, Typography, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import theme from "../styles/Theme";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import StudentAnimation from "../assets/lottie/studentAnimation.lottie";
import InstructorAnimation from "../assets/lottie/instructorAnimation.lottie";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { SocketConsumer } from "../utils/SocketProvider";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from '../assets/icons/google.svg';
import app from '../utils/Firebase';


const initialStudentValues = {
  game_code: "",
  username: "",
};

const initialInstructorValues = {
  email: "",
  password: "",
}

const validationSchemaStudent = Yup.object().shape({
  game_code: Yup.string()
    .required("Required")
    .length(5, "Game code must be 5 characters"),
  username: Yup.string().required("Required"),
});

const validationSchemaInstructor = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

const UppercaseTextField = ({ field, form, ...props } : any) => {
  const handleChange = (event : any) => {
    const { value } = event.target;
    form.setFieldValue(field.name, value.toUpperCase());
  };

  return <TextField {...field} {...props} onChange={handleChange} />;
};
const LeftSide = ({ expanded, setExpanded, handleJoin, initialValues, validationSchema, submitted, setSubmitted, screenWidth} : any) => {
    return (
      <Box
        onClick={() => {
            if (screenWidth < 850){
                return
            }
            setExpanded("left")}}
        sx={{
          width: screenWidth < 850 ? '100%' : expanded === "left" ? "100%" : "50%",
          height: '100vh',
          backgroundColor: `${theme.palette.primary.main}`,
          cursor: "pointer",
          transition: `${screenWidth < 850 ? 'height 0.8s' : 'width 0.5s'} ease-in-out`,
          display: "flex",
          alignItems: "center",
          position: screenWidth < 850 ? "absolute" : "",
          zIndex: screenWidth < 850 ? expanded == "left" ? 10 : 0 : 0,
          justifyContent: "center",
          flexDirection: "column",
        }}
      >

        {
            screenWidth < 850 ? (
                <Button sx={{
                    background:theme.palette.primary.dark,
                    display: "flex",
                    flexDirection:'column',
                    padding: 1
                }} onClick={()=>{
                    setExpanded("right")
                }}>
                <Typography variant="h1" color={"white"} >
                Student
                </Typography>
                <Typography variant="caption1" color={"white"} >
                Tap to Switch
                </Typography>
              </Button>
                
            ): (
                <Typography variant="h1" color={"white"}>
                Student
              </Typography>
            )
        }


             <Box width={ screenWidth < 850 ? '50vw' : expanded !== "left" ? "60%" : "30%"}
            sx={{
              maxHeight: screenWidth > 850 || (screenWidth < 850 && expanded === 'left') ? "auto": "0",
              transform: `scale(${screenWidth > 850 || (screenWidth < 850 && expanded === 'left') ? "1": "0"})`,
              transition: `width 0.8s ease-in-out, transform 0.5s ease-in-out, maxHeight 0.8s ease-in-out`,
            }}
          >
            <DotLottiePlayer
              src={StudentAnimation}
              autoplay
              loop
            ></DotLottiePlayer>
          </Box>
   
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log("Joining game with values:", values);
            handleJoin(values.game_code, values.username);
            setSubmitting(false);
            setSubmitted(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form
              style={{
                padding: "20px",
                borderRadius: "10px",
                opacity: expanded === "left" ? 1 : 0,
                width:  "clamp(300px, 60%, 50vw)",
                maxHeight: expanded === "left" ? "37.5vh" : 0,
                transform: `scale(${expanded === 'left' ? 1 : 0}`,
                transition: `opacity ${expanded === 'left' ? 0.4 : 0.15}s ${expanded === 'left' ? 0.1 : 0}s ease-in-out,  width 0.3s ease-in-out, max-height 0.3s ease-in-out, transform 0.5s ease-in-out`,
                backgroundColor: "white",
              }}
            >
              <Field
                name="game_code"
                label="Game Code"
                fullWidth
                inputProps={{ maxLength: 5 }}
                component={UppercaseTextField}
                margin="normal"
                error={touched.game_code && Boolean(errors.game_code)}
                helperText={touched.game_code && errors.game_code}
                style={{ opacity: expanded === "left" ? 1 : 0, transition: `opacity ${expanded === 'left' ? 0.5 : 0}s ease-in` }}
              />
              <Field
                name="username"
                as={TextField}
                label="Username"
                fullWidth
                margin="normal"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
              <Button
                disabled={isSubmitting || submitted}
                type="submit"
                variant="contained"
                sx={{
                  mt: 2,
                  width: '100%',
                  overflow: 'hidden',
                  opacity: isSubmitting ? 0.5 : 1,
                }}
                onClick={() => {
                  console.log("Button clicked, submitting form");
                }}
              >
                Join Game
              </Button>
            </Form>
          )}
        </Formik>
        {expanded !== "left" && (
          <Typography sx={{
            opacity: expanded !== "left" ? 1 : 0,
            transition: "opacity 0.3s ease-in",
          }} variant="caption" color={"white"}>
            Join a Game
          </Typography>
        )}
      </Box>
    );
  };

const RightSide = ({ expanded, setExpanded, handleGoogleAuth, handleEmailAuth, instructorForm, handleToggle, initialValues, validationSchema, submitted, setSubmitted, screenWidth } : any) => {
  
  return (
    <Box
      onClick={() => {
        if (screenWidth < 850){
            return
        }
        setExpanded("right")}
    }
      sx={{
        width: screenWidth < 850 ? '100%' : expanded === "right" ? "100%" : "50%",
        height: '100vh',
        backgroundColor: `${theme.palette.primary.medium}`,
        cursor: "pointer",
        transition: `${screenWidth < 850 ? 'height 0.8s' : 'width 0.5s'}  ease-in-out`,
        display: "flex",
        position: screenWidth < 850 ? "absolute" : "",
        zIndex: screenWidth < 850 ? expanded == "right" ? 10 : 0 : 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
        {
            screenWidth < 850 ? (
                <Button sx={{
                    background:theme.palette.primary.main,
                    display: "flex",
                    flexDirection:'column',
                    padding: 1
                }} onClick={()=>{
                    setExpanded("left")
                }}>
                <Typography variant="h1" color={"white"} >
                Instructor
                </Typography>
                <Typography variant="caption1" color={"white"} >
                Tap to Switch
                </Typography>
              </Button>
                
            ): (
                <Typography variant="h1" color={"white"}>
                Instructor
              </Typography>
            )
        }

      <Box width={ screenWidth < 850 ? '50vw' : expanded !== "right" ? "60%" : "30%"}
        sx={{
            maxHeight: screenWidth > 850 || (screenWidth < 850 && expanded === 'right') ? "auto": "0",
              transform: `scale(${screenWidth > 850 || (screenWidth < 850 && expanded === 'right') ? "1": "0"})`,
              transition: `width 0.8s ease-in-out, transform 0.5s ease-in-out, maxHeight 0.8s ease-in-out`,
        }}
      >
        <DotLottiePlayer
          src={InstructorAnimation}
          autoplay
          loop
        ></DotLottiePlayer>
      </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleEmailAuth(values, setSubmitting);
          setSubmitted(false);
          setSubmitting(false);
        }}>
        {({ errors, touched, isSubmitting }) => (
          <Form
            style={{
              padding: "20px",
              borderRadius: "10px",
              opacity: expanded === "right" ? 1 : 0,
              width:  "clamp(300px, 60%, 50vw)",
              maxHeight: expanded === "right" ? "57.5vh" : 0,
              transform: `scale(${expanded === 'right' ? 1 : 0}`,
              transition: `opacity ${expanded === 'right' ? 0.4 : 0.15}s ${expanded === 'right' ? 0.1 : 0}s ease-in-out, width 0.3s ease-in-out, max-height 0.3s ease-in-out, transform 0.5s ease-in-out`,
              backgroundColor: "white",
            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '20px',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <ToggleButtonGroup>
                <ToggleButton sx={{
                  backgroundColor: theme.palette.primary.main,
                  opacity: instructorForm === "signin" ? 1 : 0.6,
                  transition: `opacity 0.2s ease-in`,
                  maxHeight: '30px',
                  '&:hover': {
                    backgroundColor: instructorForm === "signin" ? theme.palette.primary.main : theme.palette.primary.dark,
                    opacity: 1,
                  },
                }} value="signin" onClick={() => handleToggle('signin')}>
                  <Typography variant="caption1" color={"white"} lineHeight={1}>
                    Login
                  </Typography>
                </ToggleButton>
                <ToggleButton sx={{
                  backgroundColor: theme.palette.primary.main,
                  maxHeight: '30px',
                  opacity: instructorForm === "signup" ? 1 : 0.6,
                  transition: `opacity 0.2s ease-in`,
                  '&:hover': {
                      backgroundColor: instructorForm === "signup" ? theme.palette.primary.main : theme.palette.primary.dark,
                    opacity: 1,
                  }
                }} value="signup" onClick={() => handleToggle('signup')}>
                  <Typography variant="caption1" color={"white"}>
                    Signup
                  </Typography>
                </ToggleButton>
              </ToggleButtonGroup>

              <Button
                disabled={submitted || isSubmitting}
                startIcon={<img src={GoogleIcon} alt="Google" style={{
                  width: "18px",
                  opacity: expanded === "right" ? 1 : 0,
                  transition: `opacity ${expanded === 'right' ? 0.5 : 0}s ease-in`,
                }} />}
                onClick={handleGoogleAuth}
                variant='outlined'
                sx={{
                  opacity: submitted ? 0.5 : 1,
                  color: 'white',
                  background: theme.palette.primary.main,
                  maxHeight: '30px',
                  '&:hover': {
                    background: theme.palette.primary.dark,
                  }
                }}
              >
                <Typography variant="caption1" color={"white"}>
                  {instructorForm === 'signin' ? 'Login' : 'Signup'}
                </Typography>
              </Button>
            </Box>

            <Field as={TextField} disabled={submitted || isSubmitting} name="email" type="email" label="Email" fullWidth margin="normal" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
            <Field as={TextField} disabled={submitted || isSubmitting} name="password" type="password" label="Password" fullWidth margin="normal" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} />
            <Button type="submit" variant="contained"  disabled={submitted || isSubmitting} sx={{
              opacity: submitted ? 0.5 : 1,
              mt: 1, width: '100%'
            }}>
              <Typography variant="caption" color={"white"}>
                  {instructorForm === 'signin' ? 'Login' : 'Sign Up'}
              </Typography>
            </Button>
          </Form>
        )}
      </Formik>
      {expanded !== "right" && <Typography variant="caption" color={"white"}>
        Start a Game
      </Typography>}
    </Box>
  );
};

export function Redirect() {
  const [submitted, setSubmitted] = useState(false);
  const [expanded, setExpanded] = useState("");
  const socket = SocketConsumer();
  const navigate = useNavigate();
  const [instructorForm, setInstructorForm] = useState('signin');
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setScreenWidth(window.innerWidth);
        };
        if (screenWidth < 850){
            setExpanded('left')
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  const handleToggle = (val : any) => {
    setInstructorForm(val);
  }

  const handleGoogleAuth = async () => {
    if (submitted) return;
    setSubmitted(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/instructor-dashboard');
    } catch (error) {
      console.error(error);
    }
    setSubmitted(false);
  };

  const handleEmailAuth = async (values : any, setSubmitting:any) => {
    if (submitted) return;
    setSubmitted(true);
    const { email, password } = values;
    try {
      if (instructorForm === 'signin') {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/instructor-dashboard');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/instructor-dashboard');
      }
    } catch (error) {
      console.error(error);
    }
    setSubmitting(false);
    setSubmitted(false);
  }

  const handleJoin = (game_code : any, username: any, setSubmitting: any) => {
    if (submitted) return;
    setSubmitted(true);

    if (!socket.isConnected()) {
      console.log("Socket not connected... trying to connect.");
      socket.connect();
    }

    socket.emit("join_game", {
      game_code,
      username,
    });

    socket.off("game_joined_successfully");
    socket.off("game_join_failed");

    socket.on("game_joined_successfully", (data:any) => {
      console.log("Game joined successfully");
      localStorage.setItem("game_code", data.game_code);
      localStorage.setItem("game_name", data.game_name);
      localStorage.setItem("socket_id", data.socket_id);
      navigate(`/waiting-room/${data.game_name}/${data.game_code}`);
      setSubmitting(false);
      setSubmitted(false);
    });

    socket.on("game_join_failed", (err:any) => {
      console.log("Game join failed");
      alert(err);
      setSubmitting(false);
      setSubmitted(false);
    });
  };


  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: screenWidth < 850 ? 'column' : 'row',
      }}
    >
      <Button
        startIcon={<ArrowBackIosIcon
          sx={{
            width: "clamp(12px, 2vw, 24px)",
          }}
        />}
        sx={{
          position: 'absolute',
          zIndex: 100,
          top: '2vh',
          left: '2vw',
          color: 'white',
          background: theme.palette.primary.dark,
          opacity: 0.75,
          transition: 'opacity 0.1s ease-in',
          '&:hover': {
            opacity: 1,
          }
        }}
        onClick={() => {
          navigate('/')
        }}
        variant='contained'
      >
        Back
      </Button>
      <LeftSide 
        expanded={expanded} 
        handleJoin={handleJoin} 
        initialValues={initialStudentValues} 
        validationSchema={validationSchemaStudent} 
        setExpanded={setExpanded}
        submitted={submitted}
        setSubmitted={setSubmitted}
        screenWidth={screenWidth}
      />
      <RightSide 
        expanded={expanded} 
        handleGoogleAuth={handleGoogleAuth} 
        handleEmailAuth={handleEmailAuth} 
        instructorForm={instructorForm} 
        handleToggle={handleToggle} 
        initialValues={initialInstructorValues} 
        validationSchema={validationSchemaInstructor} 
        setExpanded={setExpanded}
        submitted={submitted}
        setSubmitted={setSubmitted}
        screenWidth={screenWidth}
      />
    </Box>
  );
}
