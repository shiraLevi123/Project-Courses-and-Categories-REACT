import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import SingUp from './Componenta/SingUp';
import Home from './Componenta/Home';
import Courses from './Componenta/Course';
import LogIn from './Componenta/LogIn';
import Category from './Componenta/Category';
import Lecture from './Componenta/Lecture';
import theme from './Componenta/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/home/:userName' element={<Home />} />
          <Route path='/signup' element={<SingUp />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/category' element={<Category />} />
          <Route path='/lecture' element={<Lecture />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
