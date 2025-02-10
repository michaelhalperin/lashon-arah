import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.dark.tertiary} 0%,
    ${({ theme }) => theme.colors.red} 100%
  );
  color: ${({ theme }) => theme.colors.text.light};
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 40%;
      height: 3px;
      background: ${({ theme }) => theme.colors.text.light};
      border-radius: 2px;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }

  svg {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text.light};
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.text.light};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.text.light};
    color: ${({ theme }) => theme.colors.red};
    transform: translateY(-3px);
  }
`;

const QuickLink = styled(motion.a)`
  display: block;
  color: ${({ theme }) => theme.colors.text.light};
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  position: relative;

  &:before {
    content: "›";
    position: absolute;
    right: 0;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    padding-right: 1.5rem;

    &:before {
      opacity: 1;
    }
  }
`;

const ActionQuickLink = styled(QuickLink)`
  display: inline-block;
  border: 2px solid ${({ theme }) => theme.colors.text.light};
  color: ${({ theme }) => theme.colors.text.light} !important;
  padding: 0.7rem 1.8rem;
  margin-top: 1.5rem;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:before {
    display: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.text.light};
    color: ${({ theme }) => theme.colors.red} !important;
    transform: translateY(-2px);
    padding-right: 1.8rem;
  }

  &:active {
    transform: translateY(0);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  // margin-top: 3rem;
  font-size: 0.9rem;
  opacity: 0.8;

  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const QuickLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const QuickLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>צרו קשר</h3>
          <ContactItem>
            <FaPhone />
            <p>XXX-XXXXXXX</p>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <p>info@lashonhara.co.il</p>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <p>אהרונוביץ 10, בני ברק</p>
          </ContactItem>
          <SocialLinks>
            <SocialLink
              href="https://www.instagram.com/lashonhara/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <FaInstagram />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/Lashon.Hara.Lo.Medaber.Elai/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <FaFacebookF />
            </SocialLink>
            <SocialLink
              href="https://www.youtube.com/channel/UCdSaUtZ9dRCjV-VYCjpmN5w"
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>קישורים מהירים</h3>
          <QuickLinksContainer>
            <QuickLinksColumn>
              <QuickLink href="/about">אודות</QuickLink>
              <QuickLink href="/activities">פעילויות</QuickLink>
              <QuickLink href="/partners">שותפים</QuickLink>
            </QuickLinksColumn>
            <QuickLinksColumn>
              <QuickLink href="/contact">צור קשר</QuickLink>
              <QuickLink href="/terms">תנאי שימוש</QuickLink>
            </QuickLinksColumn>
          </QuickLinksContainer>
        </FooterSection>

        <FooterSection
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>הצטרפו אלינו</h3>
          <p>
            הצטרפו למאבק נגד אלימות ברשת ובחיים האמיתיים. יחד נבנה חברה סובלנית
            ומכבדת יותר.
          </p>
          <ActionQuickLink href="/partners">להצטרפות</ActionQuickLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>
          © {new Date().getFullYear()} עמותת "לשון הרע לא מדבר אליי". כל הזכויות
          שמורות.
        </p>
      </Copyright>
    </FooterContainer>
  );
};
