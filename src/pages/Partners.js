import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaUniversity,
  FaDollarSign,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PartnersSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

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

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  padding: 1rem;
`;

const PartnerCard = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const PartnerContent = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;

  svg {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.red};
    font-size: 48px;
    transition: transform 0.3s ease;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
    line-height: 1.6;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const Partners = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank", "noopener noreferrer");
    } else {
      navigate(path);
    }
  };

  const partners = [
    {
      title: "נבחרת השגרירים",
      description: "עזרה בחלוקות וניקוי השיח ברשת",
      icon: FaHandshake,
      path: "https://docs.google.com/forms/d/e/1FAIpQLSeZcLc_1Zz1aPZDnETY1r6y8EnwOZja07udjALgrWyeZVJs4A/viewform",
    },
    {
      title: "אני נציג של מוסד חינוך",
      description: "ורוצה לאמץ תוכנית חינוכית לתלמידים שלי",
      icon: FaUniversity,
      path: "/contact-us",
    },
    {
      title: "תמיכה כספית",
      description: "וסיוע בהפצת המסר בבתי ספר",
      icon: FaDollarSign,
      path: "/donate",
    },
    {
      title: "אני רוצה להפיץ השראה",
      description: "באמצעות הסיפור שלי",
      icon: FaHeart,
      path: "/contact-us",
    },
  ];

  return (
    <PartnersSection>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          השותפים שלנו
        </motion.h2>
        <PartnerGrid>
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => handleClick(partner.path)}
              style={{ cursor: "pointer" }}
            >
              <PartnerContent>
                <partner.icon size={48} />
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </PartnerContent>
            </PartnerCard>
          ))}
        </PartnerGrid>
      </Container>
    </PartnersSection>
  );
};
