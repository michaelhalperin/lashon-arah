import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../common/Button";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const JoinSection = styled.section`
  padding-bottom: 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  flex: 0 0 500px;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    flex: 0 0 100%;
    width: 100%;
  }
`;

const ManifestoContainer = styled.div`
  flex: 1;
  text-align: right;
  font-size: 1.2rem;
  line-height: 1.8;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  p {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
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
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  margin-top: 1rem;

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-5px) rotate(-45deg);
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
`;

export const Join = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <JoinSection>
      <Container>
        <ManifestoContainer>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p>השינוי מתחיל בי !</p>
            <p>.אני מתחייב/ת בזאת להימנע מהפצת לשון הרע ודברי רכילות</p>
            <p>
              .אני מתחייב/ת לשמור על שיח סובלני ומכבד, לדון בדרכי נועם, להביע
              התנגדות בצורה עניינית שאינה פוגענית
            </p>
            <p>
              .אני מתחייב/ת להפיץ את המסר בסביבתי, לעצור שיחות שעלולות להגיע
              ללשון הרע, בפני ומאחורי גבו של אחר
            </p>
            <p>
              .אני מתחייב/ת לעשות כל שביכולתי כדי לנקות את החברה שלנו מביוש
              (שיימינג), בריונות, אלימות, הסתה, הכללה (סטריאוטיפים), החרמות
              והלבנת פני אחר
            </p>
          </motion.div>
        </ManifestoContainer>

        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="שם מלא"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <Input
              type="email"
              placeholder="דואר אלקטרוני"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <Input
              type="tel"
              placeholder="טלפון"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            <SubmitButton type="submit" variant="primary">
              שליחה
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
                תודה על ההצטרפות! נהיה בקשר בקרוב.
              </SuccessMessage>
            )}
          </AnimatePresence>
        </FormContainer>
      </Container>
    </JoinSection>
  );
};
