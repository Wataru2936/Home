import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';

// スタイル定義
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #0A192F;
  color: #FFFFFF;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <MainContent>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
