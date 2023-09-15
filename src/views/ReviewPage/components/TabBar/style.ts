import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const TabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const Tab = styled(motion.div)`
  cursor: pointer;
  text-align: center;
  padding: 20px 0;
  border-radius: 10px;
  font-size: 18px;
  color: white;
  min-width: 160px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  /* 태블릿 뷰 */
  @media (max-width: 765.9px) {
    min-width: 72px;
    padding: 12px 0;
    font-size: 12px;
  }
`;
