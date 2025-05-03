import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const WorksContainer = styled.div`
  padding: 2rem 0;
`;

const AppCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.3);
`;

const AppTitle = styled.h2`
  color: #00BFFF;
  text-shadow: 0 0 10px #00BFFF;
  margin-bottom: 1rem;
`;

const AppDescription = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: rgba(0, 191, 255, 0.2);
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
`;

const AppLink = styled.a`
  color: #00BFFF;
  text-decoration: none;
  font-weight: bold;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px #00BFFF;
  }
`;

const Works: React.FC = () => {
  return (
    <WorksContainer>
      <AppCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AppTitle>Hachiガチャ</AppTitle>
        <AppDescription>
          はち歯科専用のガチャアプリケーションです。歯科医院の雰囲気を盛り上げるための楽しい機能を提供しています。
        </AppDescription>
        <TechStack>
          <TechTag>HTML</TechTag>
          <TechTag>CSS</TechTag>
          <TechTag>JavaScript</TechTag>
        </TechStack>
        <AppLink href="https://wataru2936.github.io/Hachi/" target="_blank" rel="noopener noreferrer">
          アプリを開く →
        </AppLink>
      </AppCard>
    </WorksContainer>
  );
};

export default Works; 