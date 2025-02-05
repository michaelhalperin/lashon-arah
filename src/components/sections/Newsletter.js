import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../common/Button';
import { FaPaperPlane } from 'react-icons/fa';

const NewsletterSection = styled.section`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 6rem 2rem;
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background: ${({ theme }) => theme.colors.red};
      border-radius: 2px;
    }
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 2rem 0;
  line-height: 1.6;
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  direction: rtl;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}15`};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.placeholder};
  }
`;

const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  white-space: nowrap;

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-5px) rotate(-45deg);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const SuccessMessage = styled(motion.div)`
  color: ${({ theme }) => theme.colors.success};
  margin-top: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${({ theme }) => `${theme.colors.success}15`};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    font-size: 1.2rem;
  }
`;

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <NewsletterSection>
      <Container>
        <PageHeader>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            הישארו מעודכנים
          </motion.h2>
        </PageHeader>
        
        <Description>
          הצטרפו לניוזלטר שלנו לקבלת עדכונים ותכנים חדשים
        </Description>
        
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="הזינו את כתובת המייל שלכם"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubmitButton type="submit" variant="primary">
            הרשמה
            <FaPaperPlane />
          </SubmitButton>
        </Form>

        <AnimatePresence>
          {isSubmitted && (
            <SuccessMessage
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                ✓
              </motion.span>
              תודה על ההרשמה! אישור יישלח למייל שלך.
            </SuccessMessage>
          )}
        </AnimatePresence>
      </Container>
    </NewsletterSection>
  );
}; 