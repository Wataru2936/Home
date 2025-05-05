import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Header from './components/Header';
import Home from './components/Home';
import Works from './components/Works';
import About from './components/About';

// テーマの型定義
interface CustomTheme {
  background: string;
  text: string;
  primary: string;
  secondary: string;
}

// テーマ定義
const lightTheme: CustomTheme = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#00BFFF',
  secondary: '#E6F1FF',
};

const darkTheme: CustomTheme = {
  background: '#0A192F',
  text: '#FFFFFF',
  primary: '#00BFFF',
  secondary: '#E6F1FF',
};

// 型定義の拡張
declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}

// スタイル定義
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  transition: all 0.3s ease;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ThemeToggle = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.primary};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px ${props => props.theme.primary};
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Router>
        <AppContainer>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? '🌞 ライトモード' : '🌙 ダークモード'}
          </ThemeToggle>
          <MainContent>
            <Header />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
