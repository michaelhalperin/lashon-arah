import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversalAccess, FaFont, FaAdjust } from 'react-icons/fa';
import { useAccessibility } from '../../context/AccessibilityContext';

const Widget = styled(motion.div)`
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  z-index: 1000;
  @media (max-width: 768px) {
    left: 1rem;
    bottom: 1rem;
  }
`;

const ToggleButton = styled(motion.button)`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

const Menu = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    increaseFontSize, 
    decreaseFontSize, 
    toggleHighContrast 
  } = useAccessibility();

  return (
    <Widget>
      <ToggleButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="אפשרויות נגישות"
      >
        <FaUniversalAccess />
      </ToggleButton>

      <AnimatePresence>
        {isOpen && (
          <Menu
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <button onClick={increaseFontSize} aria-label="הגדל גופן">
              <FaFont /> הגדל גופן
            </button>
            <button onClick={decreaseFontSize} aria-label="הקטן גופן">
              <FaFont /> הקטן גופן
            </button>
            <button onClick={toggleHighContrast} aria-label="ניגודיות גבוהה">
              <FaAdjust /> ניגודיות גבוהה
            </button>
          </Menu>
        )}
      </AnimatePresence>
    </Widget>
  );
}; 