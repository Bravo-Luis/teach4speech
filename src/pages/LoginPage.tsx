import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, TextField, Typography, Divider, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import GoogleIcon from '../assets/google.svg';
import app from '../utils/Firebase';

const LoginPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required')
  });

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/instructor-dashboard');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/instructor-dashboard');
    } catch (error: any) {
      setError(error.message);
    }
    setSubmitting(false);
  }

  return (

    <Container maxWidth="sm" sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '10vh'
    }}>
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
          color: 'black'
        }}
        onClick={()=>{
          navigate('/')
        }}
        variant='outlined'
   
        >
        Back
      </Button>
      <Typography variant="h2" gutterBottom>
        Login Page
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values, { setSubmitting });
            setSubmitting(false);
        }}
      >
        
        {({ errors, touched }) => (
          <Form>
            <Button
        startIcon={<img src={GoogleIcon} alt="Google" style={{
          width:"clamp(16px, 2vw, 24px)",
        }} />}
        onClick={handleGoogleLogin}
        variant='outlined'
        sx={{
          color: 'black',
        }}

        fullWidth
        >
        Login with Google
      </Button>
      <Divider variant='middle' sx={{ mb: 2, mt:3.5, background:"gray"}}  />
            <Field as={TextField} name="email" type="email" label="Email" fullWidth margin="normal" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
            <Field as={TextField} name="password" type="password" label="Password" fullWidth margin="normal" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, width: '100%' }}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
        <Link to="/instructor-signup" style={{ textDecoration: "none", position:'absolute', bottom:'2.5%'}}>
        <Typography variant="body1" color={"primary.light"} sx={{
          ':hover' : {
            textDecoration: "underline"
          }
        }}>
          Don't have an account?
        </Typography>
      </Link>

      </Container>
  );
};

export default LoginPage;