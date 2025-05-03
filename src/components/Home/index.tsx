import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

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
  color: #00BFFF;
  text-shadow: 0 0 10px #00BFFF, 0 0 20px #00BFFF;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  color: #E6F1FF;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Logo
        src="/wavex.png"
        alt="Hachiガチャロゴ"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <CatchPhrase
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hachiガチャ - 未来のWeb開発者への第一歩
      </CatchPhrase>
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        こんにちは！白石亘です。このサイトでは、私が作成したWebアプリケーション「Hachiガチャ」を紹介しています。
        モダンな技術とクリエイティブな発想を組み合わせた、ユニークなガチャアプリケーションです。
        ぜひご覧ください！
      </Description>
    </HomeContainer>
  );
};

export default Home; 