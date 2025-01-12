import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { addUser } from './API';
import CenteredContainer from './CenteredContainer';

export default function SignUp() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [mail, setMail] = useState('');
  const [userPassword2, setUserPassword2] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!userName || !userPassword || !mail || !userPassword2) {
        setMessage("לא הכנסת נתונים");
        return;
      }
      if (userPassword !== userPassword2) {
        setUserPassword2('');
        setUserPassword('');
        return;
      }
      const user = { name: userName, password: userPassword, email: mail };
      console.log(user);
      const response = await addUser(user);
      console.log(response);
      if (response === 201) {
        console.log("good!!");
        navigate('/');
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
            🎗️ Registration 🎗️
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
            label="email"
            variant="outlined"
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
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
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={userPassword2}
            onChange={(e) => setUserPassword2(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mt: 2 }}>
            🎗️ Sign up 🎗️
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
