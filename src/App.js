import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LoginPage from './Login/LoginPage';
import LoginForm from './Login/LoginForm';
import MainPage from './MainPage/MainPage';
import Container from './container/Container';
import FilesPage from './FilesPage/FilesPage';
import Incidents from './Incidents/Incidents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Container />}>
          <Route path="/" element={<LoginForm />} />
          <Route path="home" element={<MainPage />} />
          <Route path='files' element={<FilesPage />} />
          <Route path='incidents' element={<Incidents />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
