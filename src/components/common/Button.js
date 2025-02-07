import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = styled(motion.button)`
  padding: 0.75rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "primary":
        return `
            background: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.text.light};
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 110, 64, 0.3);
        `;
      case "outline":
        return `
            background: transparent;
            border: 2px solid ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.secondary};
            &:hover {
                background: ${({ theme }) => theme.colors.secondary};
                color: ${({ theme }) => theme.colors.text.light};
            }
        `;
      default:
        return "";
    }
  }}

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.8rem 1.5rem;
  }
`;
