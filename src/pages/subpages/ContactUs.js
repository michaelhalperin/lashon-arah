import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { Button } from "../../components/common/Button";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 2.5rem 0 1.5rem;
    font-weight: 600;
    position: relative;
    padding-right: 1rem;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 70%;
      background: ${({ theme }) => theme.colors.red};
      border-radius: 2px;
    }
  }

  .org-name {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
  }

  .address {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text.primary};

    svg {
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: white;
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-3px);
      background: ${({ theme }) => theme.colors.red};
      color: white;
    }
  }
`;

const ContactForm = styled(motion.form)`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 1.5rem;
    font-weight: 600;
    position: relative;
    padding-right: 1rem;

    &:before {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 70%;
      background: ${({ theme }) => theme.colors.red};
      border-radius: 2px;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  font-size: 1.1rem;
  background: ${({ theme }) => theme.colors.background.secondary};
  transition: all 0.3s ease;
  direction: rtl;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}15`};
    background: white;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  font-size: 1.1rem;
  background: ${({ theme }) => theme.colors.background.secondary};
  transition: all 0.3s ease;
  direction: rtl;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}15`};
    background: white;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid ${({ theme }) => theme.colors.background.secondary};
  border-radius: 12px;
  font-size: 1.1rem;
  min-height: 150px;
  background: ${({ theme }) => theme.colors.background.secondary};
  transition: all 0.3s ease;
  direction: rtl;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme }) => `${theme.colors.primary}15`};
    background: white;
  }
`;

const SubmitButton = styled(Button)`
  width: 100%;
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

export const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ subject: "", name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <ContactSection>
      <Container>
        <ContactInfo>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            יצירת קשר
          </motion.h2>
          <p className="org-name">עמותת ״לשון הרע לא מדבר אליי״</p>
          <div className="address">
            <FaMapMarkerAlt size={24} />
            <p>אהרונוביץ 10, בני ברק</p>
          </div>
          <h3>הצטרפו אלינו גם ברשתות החברתיות:</h3>
          <SocialLinks>
            <motion.a
              href="https://www.instagram.com/lashonhara/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/Lashon.Hara.Lo.Medaber.Elai/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/channel/UCdSaUtZ9dRCjV-VYCjpmN5w"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <FaYoutube />
            </motion.a>
          </SocialLinks>
        </ContactInfo>

        <ContactForm
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            כתבו לנו:
          </motion.h3>
          <FormGroup>
            <Select 
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
              required
            >
              <option value="" disabled>נושא</option>
              <option value="education">אני נציג של בית הספר ורוצה לאמץ תוכנית חינוכית</option>
              <option value="story">אני רוצה להפיץ השראה באמצעות הסיפור שלי</option>
              <option value="other">פניה בנושא אחר</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Input 
              type="text" 
              placeholder="שם"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <Input 
              type="email" 
              placeholder="אימייל"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </FormGroup>
          <FormGroup>
            <TextArea 
              placeholder="הודעה"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required 
            />
          </FormGroup>
          <SubmitButton variant="primary" type="submit">
            שליחה
            <FaPaperPlane />
          </SubmitButton>

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
                תודה על פנייתך! נחזור אליך בהקדם.
              </SuccessMessage>
            )}
          </AnimatePresence>
        </ContactForm>
      </Container>
    </ContactSection>
  );
};
