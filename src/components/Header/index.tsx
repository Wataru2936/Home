import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaRocket, FaHome, FaLaptopCode, FaUser } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import type { IconType } from 'react-icons';

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

const MobileNav = styled(motion.nav)<{ isdark: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ isdark }) => isdark ? '#0a0a23' : 'rgba(255, 255, 255, 0.98)'};
  backdrop-filter: blur(10px);
  border-radius: 0 0 15px 15px;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  z-index: 2000;
  pointer-events: auto;

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

const IconComponent = ({ icon: Icon, size = 24 }: { icon: IconType; size?: number }) => {
  const IconElement = Icon as React.ComponentType<{ size?: number }>;
  return <IconElement size={size} />;
};

interface HeaderProps {
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode }) => {
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
          <Icon><IconComponent icon={FaRocket} /></Icon>
          白石亘のポートフォリオ
        </Title>
        <Nav>
          <NavButton 
            to="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon><IconComponent icon={FaHome} /></Icon>
            トップ
          </NavButton>
          <NavButton 
            to="/works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon><IconComponent icon={FaLaptopCode} /></Icon>
            アプリ紹介
          </NavButton>
          <NavButton 
            to="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon><IconComponent icon={FaUser} /></Icon>
            プロフィール
          </NavButton>
        </Nav>
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen 
            ? <IconComponent icon={HiX} />
            : <IconComponent icon={HiMenu} />
          }
        </MobileMenuButton>
      </HeaderContent>
      {isMobileMenuOpen && (
        <MobileNav
          isdark={isDarkMode}
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
            <Icon><IconComponent icon={FaHome} /></Icon>
            トップ
          </NavButton>
          <NavButton 
            to="/works"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Icon><IconComponent icon={FaLaptopCode} /></Icon>
            アプリ紹介
          </NavButton>
          <NavButton 
            to="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Icon><IconComponent icon={FaUser} /></Icon>
            プロフィール
          </NavButton>
        </MobileNav>
      )}
    </HeaderContainer>
  );
};

export default Header; 