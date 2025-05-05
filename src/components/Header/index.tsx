import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00BFFF;
  text-shadow: 0 0 10px #00BFFF, 0 0 20px #00BFFF;
  margin: 0;
`;

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavLink = styled(Link)`
  color: #FFFFFF;
  text-decoration: none;
  margin-right: 1.5rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00BFFF;
    text-shadow: 0 0 10px #00BFFF;
  }
`;

const Header: React.FC = () => {
  const handleTitleClick = () => {
    // 親コンポーネントにイベントを伝播させる
    const event = new CustomEvent('showFireworks');
    window.dispatchEvent(event);
  };

  return (
    <HeaderContainer>
      <Title onClick={handleTitleClick} style={{ cursor: 'pointer' }}>白石亘のホームページ</Title>
      <Nav>
        <NavLink to="/">トップ</NavLink>
        <NavLink to="/works">アプリ紹介</NavLink>
        <NavLink to="/about">プロフィール</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 