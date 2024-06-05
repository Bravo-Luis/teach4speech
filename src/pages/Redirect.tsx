import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import theme from "../styles/Theme";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import StudentAnimation from "../assets/lottie/studentAnimation.lottie";
import InstructorAnimation from "../assets/lottie/instructorAnimation.lottie";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { TextField, Button } from "@mui/material";
import { SocketConsumer } from "../utils/SocketProvider";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import GoogleIcon from '../assets/icons/google.svg';
import app from '../utils/Firebase';

interface FormValues {
  game_code: string;
  username: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  game_code: "",
  username: "",
  email: "",
  password: "",
};


const validationSchema = Yup.object().shape({
  game_code: Yup.string()
    .required("Required")
    .length(5, "Game code must be 5 characters"),
  username: Yup.string().required("Required"),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const UppercaseTextField = ({ field, form, ...props }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    form.setFieldValue(field.name, value.toUpperCase());
  };

  return <TextField {...field} {...props} onChange={handleChange} />;
};

export function Redirect() {
  const [expanded, setExpanded] = useState("");
  const socket = SocketConsumer();
  const navigate = useNavigate();
  const [instructorForm, setInstructorForm] = useState('signin');
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleToggle = (val: string) => {
    setInstructorForm(val);
  }

  useEffect(() => {
    if (expanded === "left") {
      const timer = setTimeout(() => {

      }, 140); // Adjust the delay as needed
      return () => clearTimeout(timer);
    } else {

    }
  }, [expanded]);

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/instructor-dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleEmailAuth = async (values: FormValues, { setSubmitting }: any) => {
    const { email, password } = values;
    try {
      if (instructorForm === 'signin') {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/instructor-dashboard');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate('/instructor-dashboard');
      }
    } catch (error: any) {
      setError(error.message);
    }
    setSubmitting(false);
  }

  const handleJoin = (game_code: string, username: string) => {
    if (!socket.isConnected()) {
      console.log("Socket not connected... trying to connect.");
      socket.connect();
    }


    socket.emit("join_game", {
      game_code: game_code,
      username: username,
    });

    socket.off("game_joined_successfully");
    socket.off("game_join_failed");

    socket.on("game_joined_successfully", (data: any) => {
      console.log("Game joined successfully");
      localStorage.setItem("game_code", data.game_code);
      localStorage.setItem("game_name", data.game_name);
      localStorage.setItem("socket_id", data.socket_id);
      navigate(`/waiting-room/${data.game_name}/${data.game_code}`);

    });

    socket.on("game_join_failed", (err: String) => {
      console.log("Game join failed");
      alert(err);
    });
  };

  const handleClick = (side: string) => {
    if (expanded === side) {
    } else {
      setExpanded(side);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
      }}
    >
        <Button
        startIcon={<ArrowBackIosIcon
        sx={{
          width:"clamp(12px, 2vw, 24px)",
        }}
        />}
        sx={{
          position:'absolute',
          top:'2vh',
          left:'2vw',
          color: 'white',
          background: theme.palette.primary.dark,
          opacity: 0.75,
          transition: 'opacity 0.1s ease-in',
            '&:hover': {
                opacity: 1,
            }

        }}
        onClick={()=>{
          navigate('/')
        }}
        variant='contained'

   
        >
        Back
      </Button>
      <Box
        onClick={() => handleClick("left")}
        sx={{
          width: expanded === "left" ? "100%" : "50%",
          height: "100%",
          backgroundColor: `${theme.palette.primary.main}`,
          cursor: "pointer",
          transition: "width 0.5s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" color={"white"}>
          Student
        </Typography>
        <Box width={expanded !== "left" ? "60%" : "30%"}
          sx={{
            transition: "width 0.5s ease-in-out",
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
            handleJoin(values.game_code, values.username);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form
              style={{
                padding: "20px",
                borderRadius: "10px",
                opacity: expanded === "left" ? 1 : 0,
                width: expanded === "left" ? "60%" : 0,
                maxHeight: expanded === "left" ? "37.5vh" : 0,
                transform: `scale(${expanded === 'left' ? 1 : 0}`,
                transition: `opacity ${expanded === 'left' ? 0.4 : 0.15}s ${expanded === 'left' ? 0.1 : 0}s ease-in-out, width 0.3s ease-in-out, max-height 0.3s ease-in-out, transform 0.2s ease-in-out`,
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
                <Button disabled={isSubmitting} type="submit" variant="contained" sx={{
                  mt: 2,
                  width: '100%',
                  overflow: 'hidden',
                }}>
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
      <Box
        onClick={() => handleClick("right")}
        sx={{
          width: expanded === "right" ? "100%" : "50%",
          height: "100%",
          backgroundColor: `${theme.palette.primary.medium}`,
          cursor: "pointer",
          transition: "width 0.5s ease-in-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" color={"white"}>
          Instructor
        </Typography>
        <Box width={expanded !== "right" ? "60%" : "30%"}
          sx={{
            transition: "width 0.5s ease-in-out",
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
            handleEmailAuth(values, { setSubmitting });
            setSubmitting(false);
          }}>
          {({ errors, touched }) => (
            <Form
              style={{
                padding: "20px",
                borderRadius: "10px",
                opacity: expanded === "right" ? 1 : 0,
                width: expanded === "right" ? "60%" : 0,
                maxHeight: expanded === "right" ? "57.5vh" : 0,
                transform: `scale(${expanded === 'right' ? 1 : 0}`,
                transition: `opacity ${expanded === 'right' ? 0.4 : 0.15}s ${expanded === 'right' ? 0.1 : 0}s ease-in-out, width 0.3s ease-in-out, max-height 0.3s ease-in-out, transform 0.2s ease-in-out`,
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
                  startIcon={<img src={GoogleIcon} alt="Google" style={{
                    width: "18px",
                    opacity: expanded === "right" ? 1 : 0,
                    transition: `opacity ${expanded === 'right' ? 0.5 : 0}s ease-in`,
                  }} />}

                  onClick={handleGoogleAuth}
                  variant='outlined'
                  sx={{
                   
                    color: 'white',
                    background: theme.palette.primary.main,
                    maxHeight: '30px',
                    '&:hover': {
                      background: theme.palette.primary.dark,
                    }
                  }}
                  
                >
                  <Typography variant="caption1" color={"white"}>
                    {instructorForm === 'signin' ? 'Login with Google' : 'Sign Up with Google'}
                </Typography>
                </Button>
              </Box>
              {error && <Typography color="error">{error}</Typography>}

              <Field  as={TextField} name="email" type="email" label="Email" fullWidth margin="normal" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
              <Field  as={TextField} name="password" type="password" label="Password" fullWidth margin="normal" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} />
              <Button type="submit" variant="contained" sx={{
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
    </Box>
  );
}
