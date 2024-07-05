// React
import React from 'react';
import { useEffect, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';

// MUI
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LoginIcon from '@mui/icons-material/Login';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { createTheme, Modal } from '@mui/material';


// Local
import { Link as RouterLink } from 'react-router-dom';
import Layout from '@theme/Layout';
import { ThemeProvider } from '@emotion/react';
// import { useColorMode } from '@docusaurus/theme-common'; 

function Copyright(props, isDarkMode) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link sx={{ color: 'palette.text.primary'}} component={RouterLink} to="">
        UML Cloud Computing Club
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const lightTheme = createTheme();

function SignInPage() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [gradientAngle, setGradientAngle] = useState(0); // Initial gradient angle

  useEffect(() => {
      const intervalId = setInterval(() => {
        setGradientAngle((prevAngle) => (prevAngle + 2.0));
      }, 30); // Change angle every 30 milliseconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ 
            m: 1, 
            backgroundImage: 
              isDarkMode ? 
               `linear-gradient(${gradientAngle}deg, #7b5caa, #CD7672)` :
                `linear-gradient(${gradientAngle}deg, #9dcbfc, white)` 
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: 'palette.text.primary'}}>
            Sign in 
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" sx={{color: 'palette.text.primary'}} />}
              label="Remember me" 
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" sx={{ color: 'palette.text.primary'}}>
                  Forgot password? 
                </Link>
              </Grid>
              <Grid item>
                <Link href="#3" variant="body2" sx={{ color: 'palette.text.primary'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} isDarkMode={isDarkMode} />
      </Container>
    </ThemeProvider>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '16px',
  padding: '16px',
};


export default function SignIn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant='text' onClick={handleOpen} startIcon={ <LoginIcon /> }>Sign In</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        // slotProps={{
        //   backdrop: {
        //     timeout: 500,
        //   },
        // }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <SignInPage/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}