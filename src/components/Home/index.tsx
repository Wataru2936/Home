import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const CatchPhrase = styled(motion.h2)`
  font-size: 2rem;
  color: #00BFFF;
  text-shadow: 0 0 10px #00BFFF, 0 0 20px #00BFFF;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <CatchPhrase
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        未来のWeb開発者への第一歩
      </CatchPhrase>
      <Description>
        こんにちは！白石亘です。このサイトでは、私が作成したWebアプリケーション「Hachiガチャ」を紹介しています。
        ぜひご覧ください！
      </Description>
    </HomeContainer>
  );
};

export default Home; 