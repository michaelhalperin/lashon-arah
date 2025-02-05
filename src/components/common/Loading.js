import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const LoadingDot = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  margin: 0 0.5rem;
`;

export const Loading = () => {
  const dotVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
      }
    }
  };

  return (
    <LoadingContainer>
      {[0, 1, 2].map((index) => (
        <LoadingDot
          key={index}
          variants={dotVariants}
          animate="animate"
          transition={{ delay: index * 0.2 }}
        />
      ))}
    </LoadingContainer>
  );
}; 