import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, TextField, Typography, Paper, Divider } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import app from '../Firebase'; 
import GoogleIcon from '../assets/google.svg'

interface FormValues {
    email: string;
    password: string;
  }
  
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
});

function SignupPage(){
    const navigate = useNavigate()
    const auth = getAuth(app);


    const handleGoogleSignup = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            console.log('Google sign in success:', result.user);
            navigate('/instructor-login'); 
          }).catch((error) => {
            console.error('Google sign in error:', error);
            alert(error.message);
          });
      }

      const handleSubmit = (values: FormValues, { setSubmitting } : any) => {
        const { email, password } = values;
        createUserWithEmailAndPassword(auth, email, password)
          .then((response) => {
            console.log('User created:', response.user);
            navigate('/instructor-login');
          })
          .catch((error) => {
            console.error('Signup error:', error);
            alert(error.message);
          })
          .finally(() => setSubmitting(false));
      };

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
            Sign Up Page
          </Typography>

          <Button
            startIcon={<img src={GoogleIcon} alt="Google" style={{ width: 24, height: 24 }} />}
            onClick={handleGoogleSignup}
            sx={{ 
                mb: 2,
                padding: '10px 20px',
                boxShadow: '2',
             }}
          >
            Sign Up with Google
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
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
            <Button variant="text" onClick={() => navigate('/instructor-login')}>
                Already have an account? Login
            </Button>
          </Paper>
        </Paper>
      );
}

export default SignupPage;