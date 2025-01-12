import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Courses from './Course';
import Lecture from './Lecture';
import Category from './Category';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import CenteredContainer from './CenteredContainer';

function Home() {
  const { userName } = useParams();
  const [page, setPage] = useState(null);

  function updatePage(event) {
    setPage(event.target.value);
  }

  return (
    <>
      <Container maxWidth="sm">
        <CenteredContainer>
          <Box sx={{
            backgroundColor: '#FFF9C4',
            color: '#000',
            padding: '4px 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            height: '40px',
          }}>
            <Box
              sx={{
                display: 'inline-block',
                paddingLeft: '100%',
                animation: 'scroll-left 60s linear infinite',
                whiteSpace: 'nowrap',
              }}
            >
              🎗️ With  the  purchase  of  two  courses,  the  third  is  a  gift    ** for  the  cheapest  of  them 🎗️
            </Box>
            <style>
              {`
            @keyframes scroll-left {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
            </style>
          </Box>

          <AppBar
            position="fixed"
            sx={{
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: '#f5f5f5',
              boxShadow: 'none',
              height: '60px',
              marginTop: '40px',
            }}
          >
            <Toolbar
              sx={{
                height: '36px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f5f5f5',
                borderBottom: '1px solid #dcdcdc',
                padding: '0 16px',
              }}
            >

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button
                  component={Link}
                  to="/"
                  variant="text"
                  sx={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    '&:hover': {
                      color: '#000',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    border: 'none',
                    height: '100%',
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                    ml: 2,
                  }}
                >
                  🎗️ Home
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    ml: 3,
                    '&:hover': {
                      color: '#000',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    border: 'none',
                    height: '100%',
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  value="courses"
                  onClick={updatePage}
                >
                  🎗️ Courses
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    ml: 3,
                    '&:hover': {
                      color: '#000',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    border: 'none',
                    height: '100%',
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  value="lecture"
                  onClick={updatePage}
                >
                  🎗️ Lectures
                </Button>
                <Button
                  variant="text"
                  sx={{
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    ml: 3,
                    '&:hover': {
                      color: '#000',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    border: 'none',
                    height: '100%',
                    padding: '0 12px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  value="category"
                  onClick={updatePage}
                >
                  🎗️ Category
                </Button>
              </Box>

              <Button
                component={Link}
                to="/signup"
                variant="contained"
                sx={{
                  backgroundColor: '#FFD700',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  '&:hover': {
                    backgroundColor: '#FFC107',
                  },
                  height: '32px',
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '20px',
                }}
              >
                SIGNUP
              </Button>
            </Toolbar>
          </AppBar>


          {page === null && (
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                height: 'calc(100vh - 160px)',
                textAlign: 'left',
                color: '#333',
                padding: '40px',
                backgroundColor: '#FFFFFF',
                maxWidth: '800px',
                mx: 'auto',
                mt: '20px',
                ml: '20px',
              }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 3,
                  color: '#000',
                }}
              >
                Welcome, {userName}!
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 3,
                  lineHeight: '1.8',
                  color: '#555',
                }}
              >
                We're delighted to have you here. Explore our courses, lectures, and categories to find the best learning resources tailored to your needs.
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: '#777',
                }}
              >
                Click on the navigation buttons above to get started. Happy learning!
              </Typography>
            </Box>
          )}

          {page === "courses" && <Courses />}
          {page === "lecture" && <Lecture />}
          {page === "category" && <Category />}
        </CenteredContainer>
      </Container>
    </>
  );
}

export default Home;
