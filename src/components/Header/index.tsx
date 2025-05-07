import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaHome, FaLaptopCode, FaUser } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-shadow: 0 0 10px ${props => props.theme.primary}, 0 0 20px ${props => props.theme.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNav = styled(motion.nav)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: flex;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Icon = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTitleClick = () => {
    const event = new CustomEvent('showFireworks');
    window.dispatchEvent(event);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title 
          onClick={handleTitleClick} 
          style={{ cursor: 'pointer' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon><FaRocket /></Icon>
          白石亘のポートフォリオ
        </Title>
        <Nav>
          <NavButton 
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon><FaHome /></Icon>
            トップ
          </NavButton>
          <NavButton 
            to="/works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon><FaLaptopCode /></Icon>
            アプリ紹介
          </NavButton>
          <NavButton 
            to="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon><FaUser /></Icon>
            プロフィール
          </NavButton>
        </Nav>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </MobileMenuButton>
      </HeaderContent>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileNav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <NavButton 
              to="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon><FaHome /></Icon>
              トップ
            </NavButton>
            <NavButton 
              to="/works"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon><FaLaptopCode /></Icon>
              アプリ紹介
            </NavButton>
            <NavButton 
              to="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon><FaUser /></Icon>
              プロフィール
            </NavButton>
          </MobileNav>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 