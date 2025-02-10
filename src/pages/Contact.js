import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaCopy } from "react-icons/fa";
import { useState } from "react";

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  min-width: 320px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .icon-container {
    position: relative;
    z-index: 1;
    background: ${({ theme }) => `${theme.colors.lightRed}15`};
    padding: 1rem;
    border-radius: 12px;
    transition: all 0.3s ease;

    svg {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .content {
    position: relative;
    z-index: 1;
    flex-grow: 1;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  p {
    margin: 0;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const CopyNotification = styled(motion.div)`
  position: fixed;
  bottom: 7rem;
  right: 2rem;
  background: ${({ theme }) => theme.colors.red};
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.title};
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

export const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <ContactSection>
      <Container>
        <PageHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            צרו קשר
          </motion.h2>
        </PageHeader>

        <ContactInfo>
          <InfoItem
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => handleCopy("XXX-XXXXXXX")}
          >
            <div className="icon-container">
              <FaPhone />
            </div>
            <div className="content">
              <ContentWrapper>
                <h3>טלפון</h3>
                <p>XXX-XXXXXXX</p>
              </ContentWrapper>
            </div>
          </InfoItem>
          <InfoItem
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => handleCopy("info@lashonhara.co.il")}
          >
            <div className="icon-container">
              <FaEnvelope />
            </div>
            <div className="content">
              <ContentWrapper>
                <h3>דואר אלקטרוני</h3>
                <p>info@lashonhara.co.il</p>
              </ContentWrapper>
            </div>
          </InfoItem>
        </ContactInfo>
      </Container>

      {showNotification && (
        <CopyNotification
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 200,
              damping: 20,
            },
          }}
          exit={{
            opacity: 0,
            x: 100,
            scale: 0.8,
            transition: {
              duration: 0.3,
            },
          }}
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                delay: 0.1,
                type: "spring",
                stiffness: 300,
              },
            }}
          >
            ✓
          </motion.span>
          הועתק ללוח!
        </CopyNotification>
      )}
    </ContactSection>
  );
};
