import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../components/common/Button";

const DonateSection = styled.section`
  padding: 6rem 2rem;
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const DonationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const DonationCard = styled(motion.div)`
  background: white;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const Amount = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Donate = () => {
  const donationOptions = [
    { amount: "36", title: "תרומה חודשית", description: "תמיכה קבועה בפעילות" },
    { amount: "180", title: "תרומה שנתית", description: "תמיכה משמעותית" },
    { amount: "360", title: "תרומת זהב", description: "שותפות מלאה בפעילות" },
  ];

  return (
    <DonateSection>
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          תרמו למיזם
        </motion.h2>
        <p>עזרו לנו להמשיך בפעילות החשובה</p>

        <DonationOptions>
          {donationOptions.map((option, index) => (
            <DonationCard
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3>{option.title}</h3>
              <Amount>₪{option.amount}</Amount>
              <p>{option.description}</p>
              <Button variant="primary">תרמו עכשיו</Button>
            </DonationCard>
          ))}
        </DonationOptions>
      </Container>
    </DonateSection>
  );
};
