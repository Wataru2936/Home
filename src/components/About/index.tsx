import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem 0;
`;

const ProfileCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.3);
`;

const SectionTitle = styled.h2`
  color: #00BFFF;
  text-shadow: 0 0 10px #00BFFF;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const InterestList = styled.ul`
  list-style: none;
  padding: 0;
`;

const InterestItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '→';
    color: #00BFFF;
    position: absolute;
    left: 0;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <ProfileCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>プロフィール</SectionTitle>
        <Description>
          小学3年生です。codemokeyを習っています。
          プログラミングを通じて、新しいものを作ることが大好きです。
        </Description>
        <SectionTitle>興味のあること</SectionTitle>
        <InterestList>
          <InterestItem>仮想マシン</InterestItem>
          <InterestItem>サッカー</InterestItem>
        </InterestList>
      </ProfileCard>
    </AboutContainer>
  );
};

export default About; 