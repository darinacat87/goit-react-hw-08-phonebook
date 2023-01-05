import { useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Avatar,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRegisterUserMutation } from 'redux/authApi';

const theme = createTheme();

export default function RegisterForm() {
  const navigate = useNavigate();
  const [register, { isLoading, error, isSuccess }] = useRegisterUserMutation();
  const propError = error?.data?.errors;

  const handleSubmit = async event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const credential = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };
    try {
      await register(credential);
    } catch (err) {
      alert('Error fetch');
    }
  };
  useEffect(() => {
    if (error?.data?.code === 11000) {
      alert('This email address already exists please choose a unique one.');
    }
  }, [error?.data?.code]);

  useEffect(() => {
    if (isSuccess) {
      navigate('/contacts', { replace: true });
    }
  }, [isSuccess, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Welcome to PhoneBook!
          </Typography>
          <Avatar sx={{ m: 2, bgcolor: 'orange' }}>
            <ContactPhoneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please, Sign Up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  error={propError?.name !== undefined}
                  helperText={propError?.name?.name || ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={propError?.email !== undefined}
                  helperText={propError?.email?.message || ''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  error={propError?.password !== undefined}
                  helperText={propError?.password?.message || ''}
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              endIcon={<SendIcon />}
              loading={isLoading}
              loadingPosition="end"
              sx={{ mt: 4, mb: 3 }}
            >
              Sign Up
            </LoadingButton>
            <Grid container>
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2">
                  You already have an account please SIGN IN.
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
