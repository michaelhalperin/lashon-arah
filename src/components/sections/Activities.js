import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaUsers,
  FaChalkboardTeacher,
  FaBullhorn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Join } from "./Join";

const ActivitiesSection = styled.section`
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

const ActivityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
  margin-top: 3rem;
  padding: 1rem;
`;

const ActivityCard = styled(motion.div)`
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

const ActivityContent = styled.div`
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

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const Activities = () => {
  const navigate = useNavigate();

  const activities = [
    {
      title: "חלוקות",
      icon: FaHandsHelping,
      path: "/distributions",
    },
    {
      title: "שגרירים",
      icon: FaUsers,
      path: "/ambassadors",
    },
    {
      title: "סדנאות חינוכיות בבתי ספר",
      icon: FaChalkboardTeacher,
      path: "/programs",
    },
    {
      title: "תערוכות וקמפיינים",
      icon: FaBullhorn,
      path: "/campaigns",
    },
  ];

  return (
    <>
      <ActivitiesSection>
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            הפעילות שלנו
          </motion.h2>
          <ActivityGrid>
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onClick={() => navigate(activity.path)}
                style={{ cursor: "pointer" }}
              >
                <ActivityContent>
                  <activity.icon size={48} />
                  <h3>{activity.title}</h3>
                </ActivityContent>
              </ActivityCard>
            ))}
          </ActivityGrid>
        </Container>
      </ActivitiesSection>
      
      <Join />
    </>
  );
};
