import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button, TextField, Typography, Container, Divider } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import app from '../utils/Firebase'; 
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

          color: 'black',


        }}
        onClick={()=>{
          navigate('/')
        }}
        variant='outlined'

   
        >
        Back
      </Button>
          <Typography variant="h2" gutterBottom>
            Sign Up Page
          </Typography>
         
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
        onClick={handleGoogleSignup}
        variant='outlined'
        sx={{
          color: 'black',
        }}

        fullWidth
        >
        Sign Up with Google
      </Button>
      <Divider variant='middle' sx={{ mb: 2, mt:3.5, background:"gray"}}  />
                <Field as={TextField} name="email" type="email" label="Email" fullWidth margin="normal" error={touched.email && Boolean(errors.email)} helperText={touched.email && errors.email} />
                <Field as={TextField} name="password" type="password" label="Password" fullWidth margin="normal" error={touched.password && Boolean(errors.password)} helperText={touched.password && errors.password} />
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, width: '100%' }}>
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <Link to="/instructor-login" style={{ textDecoration: "none", position:'absolute', bottom:'2.5%'}}>
        <Typography variant="body1" color={"primary.light"} sx={{
          ':hover' : {
            textDecoration: "underline"
          }
        }}>
          Already have an account?
        </Typography>
      </Link>
        </Container>
      );
}

export default SignupPage;