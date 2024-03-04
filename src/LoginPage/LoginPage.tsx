import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Container, Divider, Box, Paper } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import GoogleIcon from '../assets/google.svg';
import app from '../Firebase';

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
    <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: 2.5,
        overflow: 'hidden',
        background: 'transparent',

        
    }}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          maxWidth: '100%',
          padding: '2rem 5rem',
          width: 300,
          textAlign: 'center'
        }}
      >
      <Typography variant="h5" gutterBottom>
        Login Page
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <Button
        startIcon={<img src={GoogleIcon} alt="Google" style={{ width: 24, height: 24 }} />}
        onClick={handleGoogleLogin}
        sx={{ 
            mb: 2,
            padding: '10px 20px',
            boxShadow: '2',
         }}
      >
        Login with Google
      </Button>
      <Divider sx={{ width: '100%', mb: 2 }} />
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
            <Field as={TextField} name="email" type="email" label="Email" fullWidth margin="normal" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
            <Field as={TextField} name="password" type="password" label="Password" fullWidth margin="normal" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, width: '100%' }}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
        <Button variant="text" onClick={() => navigate('/instructor-signup')}>
            Don't have an account?
        </Button>
      </Paper>
    </Paper>
  );
};

export default LoginPage;