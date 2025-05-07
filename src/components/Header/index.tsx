import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-shadow: 0 0 10px ${props => props.theme.primary}, 0 0 20px ${props => props.theme.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Nav = styled.nav`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const NavButton = styled(motion(Link))`
  color: ${props => props.theme.text};
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  font-size: 1.2rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.span`
  font-size: 1.4rem;
`;

const Header: React.FC = () => {
  const handleTitleClick = () => {
    // 親コンポーネントにイベントを伝播させる
    const event = new CustomEvent('showFireworks');
    window.dispatchEvent(event);
  };

  return (
    <HeaderContainer>
      <Title 
        onClick={handleTitleClick} 
        style={{ cursor: 'pointer' }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon>🚀</Icon>
        白石亘のホームページ
      </Title>
      <Nav>
        <NavButton 
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon>🏠</Icon>
          トップ
        </NavButton>
        <NavButton 
          to="/works"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon>💻</Icon>
          アプリ紹介
        </NavButton>
        <NavButton 
          to="/about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon>👤</Icon>
          プロフィール
        </NavButton>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 