import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import Fireworks from '../../components/Fireworks';

const HomeContainer = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const Logo = styled(motion.img)`
  width: 200px;
  height: auto;
  margin-bottom: 2rem;
  filter: drop-shadow(0 0 10px rgba(0, 191, 255, 0.5));
`;

const CatchPhrase = styled(motion.h2)`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  text-shadow: 0 0 10px ${props => props.theme.primary}, 0 0 20px ${props => props.theme.primary};
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  color: ${props => props.theme.text};
`;

const Home: React.FC = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    // 初回表示時に花火を表示
    setShowFireworks(true);
    const timer = setTimeout(() => setShowFireworks(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleShowFireworks = () => {
      setShowFireworks(true);
      setTimeout(() => setShowFireworks(false), 3000);
    };

    window.addEventListener('showFireworks', handleShowFireworks);
    return () => window.removeEventListener('showFireworks', handleShowFireworks);
  }, []);

  return (
    <HomeContainer>
      {showFireworks && <Fireworks />}
      <Logo
        src={process.env.PUBLIC_URL + '/wavex.png'}
        alt="WAVEXロゴ"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        onClick={() => {
          setShowFireworks(true);
          setTimeout(() => setShowFireworks(false), 3000);
        }}
        style={{ cursor: 'pointer' }}
      />
      <CatchPhrase
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      
      未来のWeb開発者への第一歩
      </CatchPhrase>
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        こんにちは！WAVEX1231-の白石亘です。
        <br />
        このサイトでは、私が作成したWebアプリケーションを紹介しています。
        <br />
        モダンな技術とクリエイティブな発想を組み合わせた、ユニークなアプリケーションです。
        <br />
        ぜひご覧ください！
      </Description>
    </HomeContainer>
  );
};

export default Home; 