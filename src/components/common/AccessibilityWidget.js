import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversalAccess, FaFont, FaAdjust, FaUndo } from 'react-icons/fa';
import { useAccessibility } from '../../context/AccessibilityContext';

const Widget = styled(motion.div)`
  position: fixed;
  left: 32px;
  bottom: 32px;
  z-index: 1000;
  font-size: 16px !important;
  * {
    font-size: 16px !important;
  }
  
  @media (max-width: 768px) {
    left: 16px;
    bottom: 16px;
  }
`;

const ToggleButton = styled(motion.button)`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Menu = styled(motion.div)`
  position: absolute;
  bottom: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.background.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  height: 40px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }

  svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }
`;

export const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { 
    increaseFontSize, 
    decreaseFontSize, 
    toggleHighContrast,
    resetSettings
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
            <MenuButton onClick={increaseFontSize} aria-label="הגדל גופן">
              <FaFont /> הגדל גופן
            </MenuButton>
            <MenuButton onClick={decreaseFontSize} aria-label="הקטן גופן">
              <FaFont /> הקטן גופן
            </MenuButton>
            <MenuButton onClick={toggleHighContrast} aria-label="ניגודיות גבוהה">
              <FaAdjust /> ניגודיות גבוהה
            </MenuButton>
            <MenuButton onClick={resetSettings} aria-label="איפוס הגדרות">
              <FaUndo /> איפוס הגדרות
            </MenuButton>
          </Menu>
        )}
      </AnimatePresence>
    </Widget>
  );
}; 