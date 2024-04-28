import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Typography, Container, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { SocketConsumer } from '../utils/SocketProvider';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


interface FormValues {
  game_code: string;
  username: string;
}

const initialValues: FormValues = {
  game_code: '',
  username: '',
};

const validationSchema = Yup.object().shape({
  game_code: Yup.string().required('Required').length(5, 'Game code must be 5 characters'),
  username: Yup.string().required('Required'),
});

const UppercaseTextField = ({ field, form, ...props }: any) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    form.setFieldValue(field.name, value.toUpperCase());
  };

  return <TextField {...field} {...props} onChange={handleChange} />;
};

function JoinPage() {

    const socket = SocketConsumer();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()

    const handleJoin = (game_code : string, username : string) => {
        if (!socket.isConnected()){
            console.log("Socket not connected... trying to connect.");
            socket.connect();
        }

        setIsLoading(true);

        socket.emit('join_game', {
            game_code: game_code,
            username: username
        });

        socket.off('game_joined_successfully');
        socket.off('game_join_failed');

        socket.on('game_joined_successfully', (data: any) => {
            console.log("Game joined successfully");
            localStorage.setItem('game_code', data.game_code);
            localStorage.setItem('game_name', data.game_name);
            localStorage.setItem('socket_id', data.socket_id);
            navigate(`/waiting-room/${data.game_name}/${data.game_code}`)
            setIsLoading(false);
        });

        socket.on('game_join_failed', (err: String) => {
            console.log("Game join failed")
            alert(err);
            setIsLoading(false);
        });
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
        color='primary'
   
        >
        Back
      </Button>
        <Typography variant="h2" align="center" gutterBottom>
          Join Game
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleJoin(values.game_code, values.username);
            setSubmitting(false);
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                name="game_code"
                label="Game Code"
                fullWidth
                inputProps={{ maxLength: 5 }}
                component={UppercaseTextField}
                margin="normal"
                error={touched.game_code && Boolean(errors.game_code)}
                helperText={touched.game_code && errors.game_code}
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
              <LoadingButton
                loading={isLoading}
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
                style={{ marginTop: '20px' }}
              >
                Join Game
              </LoadingButton>
            </Form>
          )}
        </Formik>

    </Container>
  );
}

export default JoinPage;