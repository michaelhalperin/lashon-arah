import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/lh-logo.png";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.dark.tertiary} 0%,
    ${({ theme }) => theme.colors.red} 100%
  );
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;
  padding: 2rem;
`;

const HeroText = styled(motion.p)`
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  opacity: 0.9;
`;

const AnimatedButton = styled(motion(Button))`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: ${({ theme }) => theme.colors.text.light};
  color: ${({ theme }) => theme.colors.red};
  border: 2px solid transparent;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: transparent;
    border-color: ${({ theme }) => theme.colors.text.light};
    color: ${({ theme }) => theme.colors.text.light};

    svg {
      transform: translateX(-8px);
    }
  }
`;

const FloatingShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
`;

const Shape = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const HeroLogo = styled(motion.img)`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 300px;
  }
`;

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <HeroSection>
      <FloatingShapes>
        {[...Array(3)].map((_, i) => (
          <Shape
            key={i}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
              x: [0, 30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </FloatingShapes>

      <HeroContent>
        <HeroLogo
          src={logo}
          alt="לשון הרע לא מדבר אליי"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <HeroText
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          יחד נבנה חברה סובלנית ומכבדת יותר
        </HeroText>

        <AnimatedButton
          variant="primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          onClick={() => navigate("/partners")}
        >
          הצטרפו אלינו
          <HiArrowLeft size={24} />
        </AnimatedButton>
      </HeroContent>
    </HeroSection>
  );
};
