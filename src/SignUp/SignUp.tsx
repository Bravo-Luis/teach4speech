import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Typography, Container, Paper, Divider } from '@mui/material';
import * as Yup from 'yup';

// Firebase imports
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../Firebase'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

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
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

const Signup: React.FC = () => {
  const navigate = useNavigate()
  const auth = getAuth(app);

  const handleGoogleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('Google sign in success:', result.user);
        navigate('/signin'); 
      }).catch((error) => {
        console.error('Google sign in error:', error);
        alert(error.message);
      });
  };

  const handleSubmit = (values: FormValues, { setSubmitting }) => {
    const { email, password } = values;
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log('User created:', response.user);
        navigate('/signin');
      })
      .catch((error) => {
        console.error('Signup error:', error);
        alert(error.message);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Container component="main">
      <Paper style={{ padding: 20, marginTop: 40 }}>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Button
          onClick={handleGoogleSignup}
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
            src="https://img.icons8.com/color/16/000000/google-logo.png" 
            alt="Google sign-in" 
            style={{ marginRight: '10px' }}
          />
          Sign Up with Google
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
                Sign Up with Email
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default Signup;
