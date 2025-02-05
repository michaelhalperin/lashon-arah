import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const InsiderSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Content = styled(motion.div)`
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.title};
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
    border-bottom: 3px solid ${({ theme }) => theme.colors.red};
    padding-bottom: 1rem;
  }

  h3 {
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

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.2rem;
    text-align: justify;
    padding: 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 2rem;

  h1 {
    font-size: 3.5rem;
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

const StyledHighlight = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledEmphasis = styled.em`
  font-style: italic;
`;

const ambassadorsContent = {
  title: "השגרירים שלנו",
  sections: [
    {
      title: "תוכנית השגרירים",
      content: [
        <>
          <StyledHighlight>תוכנית השגרירים</StyledHighlight> היא תוכנית מובילה של העמותה, 
          המכשירה מתנדבים מכל רחבי הארץ להיות שגרירים של שיח מכבד ומניעת לשון הרע.
        </>,
        <>
          השגרירים עוברים הכשרה מקיפה הכוללת <StyledEmphasis>סדנאות מקצועיות</StyledEmphasis>, 
          הרצאות מומחים, וכלים מעשיים להובלת שינוי בקהילה שלהם.
        </>,
      ],
    },
    {
      title: "פעילות השגרירים",
      content: [
        <>
          השגרירים פועלים במגוון זירות: <StyledHighlight>מוסדות חינוך</StyledHighlight>, 
          מרכזים קהילתיים, ארגונים חברתיים ועסקיים, ומובילים יוזמות מקומיות לקידום 
          שיח מכבד.
        </>,
        <>
          הם מקיימים <StyledEmphasis>סדנאות והרצאות</StyledEmphasis> המותאמות לקהלי 
          יעד שונים, ומשמשים כמודל לחיקוי בקהילותיהם.
        </>,
      ],
    },
    {
      title: "קהילת השגרירים",
      content: [
        <>
          השגרירים הם חלק מ<StyledHighlight>קהילה תומכת ופעילה</StyledHighlight>, 
          המקיימת מפגשים קבועים, ימי עיון, והכשרות המשך לפיתוח מקצועי.
        </>,
        <>
          הקהילה מהווה <StyledEmphasis>רשת תמיכה</StyledEmphasis> המאפשרת שיתוף ידע, 
          חוויות והצלחות, ומקדמת שיתופי פעולה בין השגרירים.
        </>,
      ],
    },
    {
      title: "השפעה וצמיחה",
      content: [
        <>
          התוכנית מתרחבת מדי שנה עם <StyledHighlight>גיוס שגרירים חדשים</StyledHighlight> 
          והרחבת מעגלי ההשפעה לקהילות נוספות ברחבי הארץ.
        </>,
        <>
          השגרירים מובילים <StyledEmphasis>שינוי תרבותי משמעותי</StyledEmphasis> בשיח 
          הציבורי ומקדמים את חזון העמותה ליצירת חברה מכבדת ומכילה יותר.
        </>,
      ],
    },
  ],
};

export const Ambassadors = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <InsiderSection>
      <Container>
        <PageHeader>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {ambassadorsContent.title}
          </motion.h1>
        </PageHeader>

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {ambassadorsContent.sections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * sectionIndex }}
            >
              <motion.h3>{section.title}</motion.h3>
              {section.content.map((paragraph, index) => (
                <motion.p
                  key={`${sectionIndex}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 * sectionIndex + 0.2 * index }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </Content>
      </Container>
    </InsiderSection>
  );
};
