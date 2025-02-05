import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

const programsContent = {
  title: "התוכניות שלנו",
  sections: [
    {
      title: 'תכנית "מלאכי רשת" בבתי ספר ',
      content: [
        <>
          תכנית ייחודית ופורצת דרך של העמותה בשותפות עם ProMUNers – בית הספר הרב
          תחומי למנהיגות וניהול למניעה והתמודדות עם בריונות ברשת.
        </>,
        <>
          מטרת התכנית היא לשנות מן היסוד את הרגלי הגלישה של תלמידי ישראל וליצור
          שינוי תרבותי כך שלצד הלימוד של הסכנות ברשת, המניעה וההתמודדות עם
          בריונות ברשת יש דגש על הטמעת ערכים שמקורם באיסור על הפצת לשון הרע
          ורכילות.
        </>,
        <>
          בשלב הראשון של התכנית, במשך 5 מפגשים, אנו מכשירים תלמידי תיכון בתחום
          המניעה וההתמודדות עם בריונות ברשת, מלמדים אותם על ההשלכות השליליות של
          הפצת לשון הרע ורכילות ומכשירים אותם להעביר את הידע ואת הכלים שרכשו
          לתלמידי בית ספר יסודי. בשלב השני, תלמידי התיכון נכנסים לבית ספר יסודי
          ומלמדים את התלמידים את החומר שהועבר להם (כל קבוצת גיל מקבלת שיעור
          ייעודי אשר מותאם לה). בתום ההדרכה התלמידים הופכים להיות חלק מקהילת
          “מלאכי רשת” אשר מחויבת לשיח מכבד ולאיסור הפצת לשון הרע ורכילות. הקהילה
          ממשיכה לפעול באופן עצמאי לטובת קידום הנושא ומקבלת תמיכה מהעמותה ככל
          הנדרש.
        </>,
        <>
          העובדה שהמדריכים הינם בני נוער בגילאי התיכון מחזקת באופן משמעותי את
          האפקטיביות בהעברת המסר שכן התלמידים הצעירים מסתכלים בהערצה על תלמידי
          התיכון ושואפים לנורמות והערכים שתלמידי התיכון מייצגים.
        </>,
        <>
          התכנית מוכרת כתכנית חיצונית של משרד החינוך (מספר תכנית 1196) ומוכרת גם
          על ידי מינהל חברה ונוער למעורבות חברתית כך שהשעות שתלמידי התיכון
          משקיעים בתכנית מוכרות להם כשעות של מעורבות חברתית לצורך תעודת הבגרות
        </>,
      ],
    },
    {
      title: "שיתוף פעולה מצמיחים",
      content: [
        <>
          מיזם חינוכי של העמותה בשותפות עם “מרכז מצמיחים להפחתת אלימות בבתי ספר”
          לפיתוח תוכן והפעלת סדנאות חינוכיות לבני נוער בבתי ספר ברחבי הארץ.
        </>,
        <>
          מטרת הסדנא היא להטמיע בקרב התלמידים ערכים של סובלנות וכבוד לאחר
          ולהשפיע על השיח בכיתה- להפחית שימוש בשפה פוגענית ולהגביר את ההערכה
          לשימוש בשפה חיובית ומפרגנת במסגרת היחסים החברתיים.
        </>,
        <>
          הסדנא הינה סדנת עומק המורכבת מ-8 מפגשים עם מנחים בעלי השכלה אקדמית
          בתחומי החינוך וניסיון רב. לצד העבודה עם התלמידים, המנחים מעבירים מפגשי
          הכנה לצוות ההוראה כדי שיוכלו להמשיך לעבוד עם התלמידים בתום הסדנא.
        </>,
      ],
    },
  ],
};

export const Programs = () => {
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
            {programsContent.title}
          </motion.h1>
        </PageHeader>

        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {programsContent.sections.map((section, sectionIndex) => (
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
