import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Typography, Container, Paper, Divider } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '../assets/google.svg'


// Firebase imports
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase'; // Adjust the path as necessary

// Define the form values interface
interface FormValues {
  email: string;
  password: string;
}

// Initial values for the form
const initialValues: FormValues = {
  email: '',
  password: '',
};

// Validation schema for the form
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginPage: React.FC = () => {
  const auth = getAuth(app);  
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log('Google sign in success:', result.user);
      navigate('/instructor-dashboard');
    })
    .catch((error) => {
      console.error('Google sign in error:', error);
      alert(error.message);
    });
  };

  const handleSubmit = (values: FormValues, { setSubmitting }) => {
    const { email, password } = values;
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log('Logged in user:', response.user);
        navigate('/instructor-dashboard')
      })
      .catch((error) => {
        console.error('Login error:', error);
        alert(error.message);
      })
      
      
      .finally(() => setSubmitting(false));
  };

  return (
    <Container component="main">
      <Paper style={{ padding: 20, marginTop: 40 }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          onClick={handleGoogleLogin}
          fullWidth
          variant="contained"
          style={{ 
            margin: '10px 0', 
            backgroundColor: '#fff', 
            color: '#757575', 
            boxShadow: 'none',
            textTransform: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
          }}
        >
          <img 
            src={GoogleIcon} 
            alt="Google sign-in" 
            style={{ marginRight: '10px', width: '15px', height: '15px' }}
          />
          Sign In with Google
        </Button>
        <Divider style={{ margin: '20px 0', width: '100%' }}>OR</Divider>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="email"
                label="Email Address"
                fullWidth
                margin="normal"
                variant="filled"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                fullWidth
                margin="normal"
                variant="filled"
                helperText={<ErrorMessage name="password" />}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: '20px 0' }}
                disabled={isSubmitting}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default LoginPage;
