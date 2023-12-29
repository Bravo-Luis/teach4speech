import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Typography, Container, Paper } from '@mui/material';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginPage: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values); 
  };

  return (
    <Container component="main" maxWidth="xl">
      <Paper style={{ padding: 20, marginTop: 40 }}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
                variant="outlined"
                helperText={<ErrorMessage name="email" />}
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Password"
                fullWidth
                margin="normal"
                variant="outlined"
                helperText={<ErrorMessage name="password" />}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                href='/instructor-dashboard'
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
