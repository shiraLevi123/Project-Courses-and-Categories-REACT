import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { logIn } from './API';
import CenteredContainer from './CenteredContainer';

export default function Log() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = { name: userName, password: userPassword };
      const response = await logIn(user);
      console.log(response);
      if (response === 200) {
        console.log("good!!");
        navigate(`/home/${userName}`);
      } else if (response === 404) {
        console.log("not found!");
        setUserPassword('');
        setMessage("הסיסמא שגויה");
      } else if (response === 400) {
        setUserPassword("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <CenteredContainer>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '400px',
            p: 2,
            backgroundColor: '#FFFFFF',
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" gutterBottom>
            🎗️ Connect 🎗️
          </Typography>
          <TextField
            label="user name"
            variant="outlined"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            🎗️ Log in 🎗️
          </Button>
          <Button component={Link} to="/signup" color="secondary" fullWidth>
            <br></br>
            🎗️ To register click here 🎗️
          </Button>
          {message && (
            <Typography color="error" variant="body2" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Box>
      </CenteredContainer>
    </Container>
  );
}
