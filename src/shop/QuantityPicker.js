import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const Button = styled(motion.button)`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &:hover {
      border-color: ${({ theme }) => theme.colors.border};
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

const Amount = styled.span`
  font-size: 1.2rem;
  min-width: 40px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;

export const QuantityPicker = ({ quantity, setQuantity, min = 1, max = 99 }) => {
  return (
    <Container>
      <Label>כמות:</Label>
      <Button
        onClick={() => setQuantity(prev => Math.max(min, prev - 1))}
        disabled={quantity <= min}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        -
      </Button>
      <Amount>{quantity}</Amount>
      <Button
        onClick={() => setQuantity(prev => Math.min(max, prev + 1))}
        disabled={quantity >= max}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        +
      </Button>
    </Container>
  );
};