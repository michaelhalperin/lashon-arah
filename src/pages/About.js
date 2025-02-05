import styled from "styled-components";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AboutSection = styled.section`
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  .icon {
    position: absolute;
    bottom: 2rem;
    left: 1rem;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &:hover .icon {
    opacity: 1;
  }
`;

export const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AboutSection>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          על העמותה
        </motion.h2>
        <Grid>
          <Card
            whileHover={{ y: -5 }}
            onClick={() => handleNavigation("/about/about-us")}
          >
            <h3>מה זה בעצם?</h3>
            <p>המיזם מטרתו לקדם שיח חיובי ומכבד בחברה</p>
            <HiArrowLeft className="icon" size={24} />
          </Card>
          <Card
            whileHover={{ y: -5 }}
            // onClick={() => handleNavigation("/about/how")}
          >
            <h3>הדרך שלנו</h3>
            <p>חינוך, הסברה ופעילות קהילתית</p>
            <HiArrowLeft className="icon" size={24} />
          </Card>
          <Card
            whileHover={{ y: -5 }}
            // onClick={() => handleNavigation("/about/vision")}
          >
            <h3>החזון שלנו</h3>
            <p>חברה מאוחדת ומכבדת</p>
            <HiArrowLeft className="icon" size={24} />
          </Card>
        </Grid>
      </Container>
    </AboutSection>
  );
};
