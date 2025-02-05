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

const distributionsContent = {
  title: "חלוקות",
  sections: [
    {
      title: "מטרת החלוקות",
      content: [
        <>
          <StyledHighlight>פרויקט החלוקות</StyledHighlight> הוא אחד מהפרויקטים המרכזיים 
          של העמותה, המיועד לסייע למשפחות נזקקות ולקדם ערכים של נתינה וערבות הדדית.
        </>,
        <>
          אנו מאמינים כי <StyledEmphasis>עזרה הדדית</StyledEmphasis> היא הבסיס לבניית 
          חברה מכבדת ותומכת.
        </>,
      ],
    },
    {
      title: "סוגי החלוקות",
      content: [
        <>
          החלוקות כוללות: <StyledHighlight>מזון</StyledHighlight>, ציוד לבית הספר, 
          בגדים, וציוד ביתי בסיסי למשפחות הזקוקות לכך.
        </>,
        <>
          בחגים אנו מקיימים <StyledEmphasis>מבצעי חלוקה מיוחדים</StyledEmphasis> הכוללים 
          מוצרים ייחודיים לחג ומארזי שי מותאמים.
        </>,
      ],
    },
    {
      title: "מתנדבים ושותפים",
      content: [
        <>
          הפעילות מתבצעת בעזרת <StyledHighlight>רשת מתנדבים</StyledHighlight> מסורה 
          ושיתופי פעולה עם ארגונים חברתיים, עסקים וגופים מוניציפליים.
        </>,
        <>
          המתנדבים שלנו עוברים <StyledEmphasis>הכשרה מקצועית</StyledEmphasis> ופועלים 
          בצורה מאורגנת ויעילה לטובת הקהילה.
        </>,
      ],
    },
    {
      title: "השפעה חברתית",
      content: [
        <>
          מעבר לסיוע המיידי, החלוקות מייצרות <StyledHighlight>מעגל של נתינה</StyledHighlight> 
          ומחזקות את הקשרים הקהילתיים.
        </>,
        <>
          אנו רואים כיצד משפחות שקיבלו סיוע בעבר הופכות בעצמן 
          ל<StyledEmphasis>שותפות פעילות</StyledEmphasis> במערך החלוקה והנתינה.
        </>,
      ],
    },
  ],
};

export const Distributions = () => {
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
            {distributionsContent.title}
          </motion.h1>
        </PageHeader>

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {distributionsContent.sections.map((section, sectionIndex) => (
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
