import styled from "styled-components";
import { motion } from "framer-motion";

const TermsSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.primary};
  direction: rtl;
  text-align: right;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Content = styled.div`
  white-space: pre-wrap;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};

  h2 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const StyledHighlight = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledLink = styled.a`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

const StyledEmphasis = styled.em`
  font-style: italic;
`;

const StyledQuote = styled.q`
  quotes: "" "" '"' "'";
`;

export const Terms = () => {
  return (
    <TermsSection
      as={motion.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Title>תקנון אתר לשון הרע לא מדבר אלי ומדיניות הפרטיות</Title>
        <Content>
          {`תקנון זה, דינו כחוזה משפטי לכל דבר וענין. הגלישה והרכישה באתר מהווה הסכמה לכל הנאמר בו.  לפיכך הנכם מתבקשים לקרוא תקנון זה בעיון, ולסמן כי קראתם אותו וכי אתם מסכימים עם כל הנאמר בו.

תקנון זה הינו בין הגולש ו/או מבצע פעולת הקניה באתר (להלן: "הלקוח") לבין אתר ועמותת "לשון הרע לא מדבר אלי" (ע"ר) ו/או חברת ד.י. הלפרינס בע"מ (להלן "החברה").

מהי מדיניות הפרטיות?

"לשון הרע לא מדבר אלי" (או "הארגון") מתייחס בכבוד לפרטיות משתמשי אתר הבית של הארגון, הפועל בכתובת http://lashonhara.co.il או בכל כתובת אחרת לפי שיקול דעת הארגון ("האתר").`}
          {/* Rest of the terms text */}
        </Content>
      </Container>
    </TermsSection>
  );
};

export default Terms;
