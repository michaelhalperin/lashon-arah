import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import image_1 from "../../assets/images/Links/eran-link.png";
import image_2 from "../../assets/images/Links/105-link.png";
import image_3 from "../../assets/images/Links/netica-link.png";
import image_4 from "../../assets/images/Links/sahar-link.svg";

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

  & > div {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};

    &:first-of-type {
      margin-top: 0;
      padding-top: 0;
      border-top: none;
    }
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

const TimelineContainer = styled.div`
  position: fixed;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 10;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const TimelineItem = styled(motion.button)`
  background: ${({ active, theme }) => (active ? theme.colors.red : "white")};
  border: 2px solid ${({ theme }) => theme.colors.red};
  color: ${({ active, theme }) => (active ? "white" : theme.colors.lightRed)};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: white;
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

const LinksSection = styled.div`
  margin-top: 1rem;
  padding: 2rem 0;
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  overflow-x: auto;
  padding-bottom: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 280px);
    justify-content: flex-start;
  }
`;

const LinkCard = styled(motion.a)`
  max-width: 250px;
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: contain;
  border-radius: 8px;
`;

const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
  margin: 0;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  
  @media (min-width: 1200px) {
    cursor: default;
  }

  h3 {
    margin: 0;
  }
`;

const CollapseIcon = styled(motion.span)`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.red};
  
  @media (max-width: 1200px) {
    display: block;
  }
`;

const SectionContent = styled(motion.div)`
  @media (max-width: 1200px) {
    overflow: hidden;
  }

  @media (min-width: 1201px) {
    height: auto !important;
    opacity: 1 !important;
  }
`;

const topicsContent = {
  what: {
    title: "המשימה שלנו",
    content: [
      <>
        <StyledHighlight>"לשון הרע לא מדבר אליי"</StyledHighlight> הינה עמותה
        הפועלת לחיזוק תרבות שיח חיובית בישראל וקידום ערכים של סובלנות וכבוד הדדי
        על ידי העלאת המודעות לנזקי לשון הרע ושיימינג.
      </>,
      <>
        המיזם הוקם בשנת <StyledEmphasis>2007</StyledEmphasis> על ידי איש העסקים{" "}
        <StyledHighlight>דוד הלפרין</StyledHighlight>, ובמסגרתו הופץ המסר
        באמצעות שלטי חוצות ענקיים בכל הארץ, חלוקת מיליוני סטיקרים וצמידים,
        ביקורים וחלוקת מוצרים בבתי חולים ובבסיסים צבאיים והפקת תערוכות
        אומנותיות.
      </>,
      <>
        בשנים האחרונות אנו עדים להסלמה בשיח המקובל. המושג{" "}
        <StyledQuote>מפה לאוזן</StyledQuote> מקבל משמעות חדשה לאור החשיפה
        המורחבת שמקנות הרשתות הדיגיטליות, והשיח הופך די בקלות לפוגעני ועשוי
        להוביל לתוצאות הרסניות כאשר ילדים שעוברים{" "}
        <StyledEmphasis>שיימינג (ביוש)</StyledEmphasis> פוגעים בעצמם, דיונים על
        פוליטיקה מקבלים מימד של אלימות ומורגשת ירידה כללית בהכלת האחר ודעות
        שונות.
      </>,
      <>
        לאחר <StyledEmphasis>14 שנים</StyledEmphasis> של פעילות{" "}
        <StyledQuote>גרילה</StyledQuote> שנוצרה מתוך עשייה וללא תכנון הוחלט למסד
        את הפעילות במסגרת עמותה לטובת הרחבת הפעילות בצורה שיטתית והגדלת ההשפעה
        על חינוך דור העתיד.
      </>,
      <>
        פעילות העמותה נעשית מתוך אמונה ששינוי תרבותי אמיתי ייעשה על ידי{" "}
        <StyledHighlight>חינוך ודוגמא אישית</StyledHighlight>. העמותה מתמקדת
        בתחום החינוך ומפעילה תוכניות מקצועיות המתואמות לילדים ובני נוער במסגרת
        גנים, בתי ספר, תיכונים ותנועות נוער בכל רחבי הארץ.
      </>,
      <>
        בוגרי התכניות שלנו, לצד מתנדבים רבים נוספים, הופכים להיות חלק מקהילה של{" "}
        <StyledHighlight>״שגרירים״</StyledHighlight> שמחויבת לשמירת הלשון,
        סובלנות וכבוד לאחר ופועלת בשטח וברשתות החברתיות כדי לשפר את השיח. לצד
        פעילות זו, העמותה פועלת, בין היתר, במרחב המקוון, ברשתות החברתיות ובמדיה
        הציבורית במטרה להגיע לקהל רחב ככל הניתן. לעמותה שותפות עם מובילי דעת קהל
        מהשורה הראשונה שהפכו לשגרירי העמותה המחויבים גם הם למטרה ורוצים להוות
        דוגמא אישית.
      </>,
      <>
        פעילות העמותה חובקת עולם, ונכון להיום תורגם הסלוגן ל-
        <StyledEmphasis>15 שפות</StyledEmphasis> והיד עוד נטויה. לעמותה פעילות
        ענפה באנגלית,{" "}
        <StyledLink
          href="https://www.instagram.com/lashonharaUSA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          בפרופיל האינסטגרם
        </StyledLink>{" "}
        ומול שגרירים בארה"ב.
      </>,
      <>
        בשנת <StyledEmphasis>2020</StyledEmphasis> זכה מיזם{" "}
        <StyledHighlight>לשון הרע לא מדבר אלי</StyledHighlight> בפרס ירושלים
        היוקרתי וזאת רק ההתחלה.
      </>,
    ],
    speak: {
      title: "דבר המייסד",
      content: [
        <>
          את המחויבות האישית שלי להימנע מאמירת לשון הרע ורכילות על האחר ינקתי
          מאבי, <StyledHighlight>הרב רפאל הלפרין ז"ל</StyledHighlight>, שנהג
          להקיש על הכוס בשולחן השבת ולהוסיף את האותיות{" "}
          <StyledEmphasis>ל"ה</StyledEmphasis>, ראשי התיבות של{" "}
          <StyledQuote>לשון הרע</StyledQuote>, כאשר מישהו החל לדבר על אנשים
          אחרים ללא סיבה וערך מוסף אמיתי.
        </>,
        <>
          אבא ז"ל חינך אותנו מגיל קטן לא לדבר על אחרים – לא טוב ולא רע, אלא אם
          כן לדברים יש ערך מוסף או למידה עם ערך לחיים.
        </>,
        <>
          הקמפיין של <StyledQuote>לשון הרע לא מדבר אלי!</StyledQuote> נולד לאחר
          שהייתי עד מקרוב לתקרית מצערת שבה שני אנשים קרובים אליי רבו ביניהם
          וניתקו יחסים בעקבות אמירת לשון הרע שבסוף התברר שהיה מנופח וחסר
          פרופורציה. כשראיתי את הנתק והכאב שנגרמו כתוצאה מהדברים המעוותים שנאמרו
          ויצאו משליטה הרגשתי שאני לא יכול לעמוד מנגד וחשבתי על סלוגן שיתזכר את
          האנשים ויגרום להם לא לדבר לשון הרע.
        </>,
        <>
          התלבטתי רבות האם המשפט הנכון צריך להיות "לשון הרע{" "}
          <StyledHighlight>לא מדבר</StyledHighlight> אלי" או "לשון הרע{" "}
          <StyledHighlight>אל תדבר</StyledHighlight> אלי" מתוך הבנה שיש הבדל
          גדול מאד בין שניהם והחלטתי שנכון ללכת על התחייבות אישית ולקיחת אחריות
          ולא כהטפה ודרישה מהאחר לשנות את הנורמות שלו.
        </>,
        <>
          בעצם, רציתי להביא חלק מהחינוך של אבא ז"ל ואת האחריות שהוא נטע בנו לכמה
          שיותר אנשים בעולם.
        </>,
        <>
          כיום, ובמיוחד כאשר ישנם כל כך הרבה ערוצי תקשורת והחשיפה עצומה, שמירה
          על הלשון שלנו הופכת להיות משמעותית יותר וגורלית יותר. לא בכדי נאמר
          "החיים והמוות ביד הלשון".
        </>,
        <>
          אני נתקל הרבה פעמים בשאלות מה זה בעצם לשון הרע? מה זו רכילות? איך אני
          יודע אם מה שאני אומר מותר או אסור? ואם ברור לי שמדובר באמת – האם אני
          לא מחויב להפיץ אותה? לצערי, יש הרבה חוסר ידע בנושא ובחסך הזה אנחנו
          רוצים לטפל.
        </>,
        <>
          אנחנו רוצים להפיץ את המסר באופן הרחב ביותר ולהעמיק את הידע אצל כמה
          שיותר אנשים כי בסופו של דבר אני מאמין שהפצת לשון הרע, ברובה, נעשית מכח
          ההרגל ולאו דווקא מכוונה רעה.
        </>,
        <>
          זה משהו שנמצא בתרבות שלנו ואם נשכיל לטפל בזה היום, ובמיוחד אם נתחיל
          כבר בגיל צעיר נרוויח כולנו חברה נקיה ואוהבת יותר, קשרי חברות עמוקים
          יותר וקירוב לבבות בין האנשים החיים פה.
        </>,
        <>
          בני נוער נאלצים להתמודד היום עם מתקפות אישיות, חרמות, השפלות ועלבונות
          שמוטחים בהם, בין היתר וביתר שאת, באמצעות רשתות חברתיות בפני מספר רב של
          אנשים. אם נטפל בבעיה, המרחב הוירטואלי והפיזי יהפוך להיות מוגן יותר
          ובסופו של דבר זה גם יציל חיים כי כולנו יודעים היום שמילים יכולות
          להרוג. פשוטו כמשמעו.
        </>,
        <>
          כל אדם שרוצה שילדיו לא ידברו לשון הרע וכמובן שלא ייפגעו מלשון הרע
          ורכילות, צריך להימנע מכך בעצמו שכן הכל מתחיל מדוגמא אישית.
        </>,
        <>
          "יש משפט מאוד מדויק שצריך להיות לנו מול העיניים – מי שמדבר{" "}
          <StyledHighlight>איתך</StyledHighlight> לשון הרע, ידבר{" "}
          <StyledHighlight>עליך</StyledHighlight> לשון הרע! וההסבר פשוט: כי
          ללשון אין עצם, מי שמדבר איתך לשון הרע – לא בוחר על מי לדבר, הוא בוחר
          עם מי לדבר
        </>,
        <>
          בנוסף להשפעה הלא טובה שיש ללשון הרע, זוהי גם עבירה מהתורה –
          <StyledHighlight> "לא תלך רכיל בעמיך"</StyledHighlight> (ויקרא יט, טז)
          שאסרה עלינו לדבר לשון הרע בדיוק מהסיבה הזאת, כפי שנכתב בתהילים – "מי
          האיש החפץ חיים אהב ימים לראות טוב – נצור לשונך מרע ושפתיך מדבר מרמה"
          (תהילים לד, יג) כי מי ששומר על הלשון לו עצמו יהיה הרבה יותר טוב.
        </>,
        <>
          החפץ חיים לימד אותנו שאם אדם יכול לגרום לאדם אחר לדבר אפילו מילה אחת
          פחות לשון הרע זו זכות גדולה שאי אפשר להעריך בכלל.
        </>,
        <>
          הלימוד הזה, לצד צוואתו הרוחנית של אבי ז"ל , שבה בין היתר, ציווה עלינו
          במשפחה להמשיך ולשמור על הלשון מנחה אותי בפעילותי ואני רואה בהפצת המסר
          שליחות וייעוד אישי לחיים.
        </>,
        <StyledEmphasis>
          <StyledHighlight>דוד הלפרין, מייסד</StyledHighlight>
        </StyledEmphasis>,
      ],
    },
    explain: {
      title: "מה זה לשון הרע?",
      content: [
        <>
          <StyledEmphasis>דיבור שלילי שנאמר לאחר או על אחר.</StyledEmphasis>
        </>,
        <>
          אם לא בטוחים מה נחשב ומה לא, ניתן להשתמש ביום יום במבחן פשוט:{" "}
          <StyledHighlight>
            אם לא הייתם אומרים את זה בפני האדם – אז לא כדאי לומר את זה מאחורי
            גבו.
          </StyledHighlight>{" "}
          בהגדרה הזאת כלולים השמצות, לעג, רכילות (גם סיפור שקרה באמת), הכללה,
          ביוש (שיימינג), הסתה והלבנת פנים.
        </>,
        <>
          האיסור בדבר הפצת לשון הרע ורכילות מופיע במקורות היהודיים ומלווה את
          התרבות היהודית לאורך ההיסטוריה. בספר ויקרא (יט, טז) נכתב "לא תלך רכיל
          בעמך" ובספר תהילים (לד, יג) נכתב "מי האיש החפץ חיים אוהב ימים לראות
          טוב. נצור לשונך מרע ושפתיך מדבר מרמה". הלכות לשון הרע נדונו רבות על
          ידי חז"ל, הרמב"ם ועוד, מי שהכי התפרסם בהקשר הזה היה הרב ישראל מאיר
          הכהן מראדין שחיבר את הספר "חפץ חיים" שעוסק רק בהלכות לשון הרע
          והשלכותיה. ההלכה היהודית אוסרת כל דיבור רע על יחיד או רבים הכולל פרסום
          מעשיהם הרעים, פרסום היכול לפגוע בהם או להעליבם. כמו כן, אסור לומר
          רכילות ודיבור מאחורי הגב – דברים רעים וטובים כאחד.
        </>,
        <>
          בעצם, לשון הרע זה כל דיבור על האחר שאין בו ערך מוסף משמעותי או משהו
          שתורם ללמידה לחיים.
        </>,
        <>
          <StyledHighlight>
            את הנזק של הפצת לשון הרע קשה לאמוד, דבר המצביע על חומרתו הגדולה.
            מהרגע שאדם אמר משהו על אחר, אין לו שליטה על הדברים שיופצו על אותו
            אחר, על היקף החשיפה שלהם, ועל ההשלכות שלהם
          </StyledHighlight>
          . בשנים האחרונות במיוחד אנחנו עדים לכמה מהנזקים החמורים של תופעת לשון
          הרע, כולל איבוד מקומות עבודה, הפסד מוניטין ונזקים כלכליים, ואף נטילת
          חיים. זוהי סיבה נוספת להימנע מדיבור על אחר ללא צורך, שכן איננו יודעים
          איזה נזק עתידים לגרום.
        </>,
        <>
          תרבות הדיבור משקפת את החברה בה אנחנו חיים, ומעצם מגדירה אותנו כחברה
          אנושית. ככל שנשכיל "לנקות" אותה ולהשתמש בשיח מכבד וענייני, נרוויח חברה
          סובלנית ובטוחה יותר. אנחנו מאמינים שמטרה זו ברת השגה באמצעות מודעות
          לדרך שבה אנחנו מדברים ומה אנחנו אומרים, איך מנהלים דיון ומגשרים על
          מחלוקות, באמצעות חינוך הדור הצעיר, חיזוק התנהגות חיובית כמודל לחיקוי
          והפצת מסרים של אהבת חינם.
        </>,
      ],
    },
    toDo: {
      title: "מה עושים כשנתקלים בלשון הרע?",
      content: [
        <>
          <StyledHighlight>שינוי חברתי מתחיל מאיתנו, ממני.</StyledHighlight> כל
          אחד מאיתנו שולט קודם כל על הדברים שהוא אומר ועושה, ולכן אחריות אישית
          לשינוי השיח היא המקור להפסקת הפצת לשון הרע.
        </>,
        <>
          <StyledHighlight>
            יודעים מידע רכילותי "עסיסי" על האחר –
          </StyledHighlight>{" "}
          הפסקת הפצתו בידיים שלכם. בואו נתאפק מלספר אותו הלאה, לא היינו רוצים
          שיספרו דברים כאלו עלינו.
        </>,
        <>
          <StyledHighlight>
            רוצים לערוך דיון, להעביר ביקורת, להביע דעתכם –
          </StyledHighlight>{" "}
          התייחסו לגופו של עניין, בצורה מכבדת, שמרו על תרבות דיון ותנו מקום גם
          לזה שמולכם להתבטא. לא חייבים להסכים עם כולם ולכל רעיון, אבל כדאי
          להקשיב, אולי הוא יודע משהו אחד לפחות שלא חשבתם עליו.
        </>,
        <>
          <StyledHighlight>נוכחים בשיחה שמתחיל בה לשון הרע –</StyledHighlight>{" "}
          אתם יכולים לבחור שלא ידברו לידכם לשון הרע, כמו שנהוג לבקש שלא יעשנו
          לידכם או לא יצעקו.
        </>,
        <>
          <StyledHighlight>קראתם תגובה פוגענית ברשת –</StyledHighlight> הגיבו
          "יש דרך יפה יותר לכתוב את הדברים. לשון הרע לא מדבר אליי". אם לא נותנים
          במה למסר, הוא הופך מיותר. אנחנו מעודדים חיזוק תגובות חיוביות והבעת דעה
          בצורה תרבותית, ומורידים את אלו שפוגעים בנו ע"י התעלמות או מסר חותך.
          אפשר לחסום ולמחוק מגיבים פוגעניים אם הם "חברים" ברשתות החברתיות.
        </>,
        <>
          <StyledHighlight>פנייה לעזרה –</StyledHighlight> אם הפיצו עליכם לשון
          הרע, בכתב או בע"פ, כדאי לפנות למקור או לפלטפורמה בה התפרסמו הדברים
          ולבקש תיקון/ הסרה.
        </>,
        <>
          <StyledHighlight>במקרה של קטינים –</StyledHighlight> חשוב ליידע מבוגר
          תומך או משפחה שיסייעו בטיפול.
        </>,
        <>
          <StyledHighlight>יש מספר מוקד ייעודיים</StyledHighlight> לטיפול במקרים
          כמו בריונות, אלימות ושיח שלילי ברשת:
        </>,
        <>
          <StyledHighlight>
            ללשון הרע יכולות להיות השלכות משפטיות –
          </StyledHighlight>{" "}
          חוק לשון הרע קובע פיצוי של עד 50,000 ש"ח לנפגעים, ועד שנה מאסר
          לפוגעים.
        </>,
      ],
    },
  },
};

const linkCards = [
  {
    title: "עזרה ראשונה נפשית - או בטלפון 1201",
    image: image_1,
    link: "https://www.eran.org.il/",
  },
  {
    title: "סיוע והקשבה ברשת - או במייל ahar.help@gmail.com",
    image: image_4,
    link: "https://www.sahar.org.il/",
  },
  {
    title: "מוקד 105 - המטה הלאומי להגנה על ילדים ברשת",
    image: image_2,
    link: "https://www.gov.il/he/departments/Units/105_call_center",
  },
  {
    title: "המרכז לאינטרנט בטוח",
    image: image_3,
    link: "https://www.isoc.org.il/safe",
  },
];

export const AboutUs = () => {
  const topic = topicsContent.what;
  const [activeSection, setActiveSection] = useState("main");
  const [expandedSections, setExpandedSections] = useState({
    main: false,
    speak: false,
    explain: false,
    toDo: false
  });

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["main", "speak", "explain", "toDo"]
        .map((id) => ({
          id,
          element: document.getElementById(id),
        }))
        .filter(({ element }) => element);

      const current = sections.find(({ element }) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setExpandedSections({
          main: true,
          speak: true,
          explain: true,
          toDo: true
        });
      } else {
        setExpandedSections({
          main: false,
          speak: false,
          explain: false,
          toDo: false
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSection = (sectionId) => {
    if (window.innerWidth <= 1200) {
      setExpandedSections(prev => ({
        ...prev,
        [sectionId]: !prev[sectionId]
      }));
    }
  };

  return (
    <InsiderSection>
      <Container>
        <PageHeader>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            קצת עלינו
          </motion.h1>
        </PageHeader>

        <Content>
          <motion.div id="main">
            <SectionHeader onClick={() => toggleSection("main")}>
              <motion.h3>{topic.title}</motion.h3>
              <CollapseIcon
                animate={{ rotate: expandedSections.main ? 180 : 0 }}
              >
                ▼
              </CollapseIcon>
            </SectionHeader>
            <SectionContent
              animate={{
                height: expandedSections.main ? "auto" : 0,
                opacity: expandedSections.main ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {topic.content.map((paragraph, index) => (
                <motion.p key={`main-${index}`}>
                  {paragraph}
                </motion.p>
              ))}
            </SectionContent>
          </motion.div>

          {topic.speak && (
            <motion.div id="speak">
              <SectionHeader onClick={() => toggleSection("speak")}>
                <motion.h3>{topic.speak.title}</motion.h3>
                <CollapseIcon
                  animate={{ rotate: expandedSections.speak ? 180 : 0 }}
                >
                  ▼
                </CollapseIcon>
              </SectionHeader>
              <SectionContent
                animate={{
                  height: expandedSections.speak ? "auto" : 0,
                  opacity: expandedSections.speak ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {topic.speak.content.map((paragraph, index) => (
                  <motion.p key={`speak-${index}`}>
                    {paragraph}
                  </motion.p>
                ))}
              </SectionContent>
            </motion.div>
          )}

          {topic.explain && (
            <motion.div id="explain">
              <SectionHeader onClick={() => toggleSection("explain")}>
                <motion.h3>{topic.explain.title}</motion.h3>
                <CollapseIcon
                  animate={{ rotate: expandedSections.explain ? 180 : 0 }}
                >
                  ▼
                </CollapseIcon>
              </SectionHeader>
              <SectionContent
                animate={{
                  height: expandedSections.explain ? "auto" : 0,
                  opacity: expandedSections.explain ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {topic.explain.content.map((paragraph, index) => (
                  <motion.p key={`explain-${index}`}>
                    {paragraph}
                  </motion.p>
                ))}
              </SectionContent>
            </motion.div>
          )}

          {topic.toDo && (
            <motion.div id="toDo">
              <SectionHeader onClick={() => toggleSection("toDo")}>
                <motion.h3>{topic.toDo.title}</motion.h3>
                <CollapseIcon
                  animate={{ rotate: expandedSections.toDo ? 180 : 0 }}
                >
                  ▼
                </CollapseIcon>
              </SectionHeader>
              <SectionContent
                animate={{
                  height: expandedSections.toDo ? "auto" : 0,
                  opacity: expandedSections.toDo ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {topic.toDo.content.map((paragraph, index) => (
                  <motion.p key={`todo-${index}`}>
                    {paragraph}
                  </motion.p>
                ))}
              </SectionContent>
            </motion.div>
          )}
        </Content>

        <TimelineContainer>
          <TimelineItem
            active={activeSection === "main"}
            onClick={() => scrollToSection("main")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {topic.title}
          </TimelineItem>
          {topic.speak && (
            <TimelineItem
              active={activeSection === "speak"}
              onClick={() => scrollToSection("speak")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {topic.speak.title}
            </TimelineItem>
          )}
          {topic.explain && (
            <TimelineItem
              active={activeSection === "explain"}
              onClick={() => scrollToSection("explain")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {topic.explain.title}
            </TimelineItem>
          )}
          {topic.toDo && (
            <TimelineItem
              active={activeSection === "toDo"}
              onClick={() => scrollToSection("toDo")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {topic.toDo.title}
            </TimelineItem>
          )}
        </TimelineContainer>

        <LinksSection>
          <LinksGrid>
            {linkCards.map((card, index) => (
              <LinkCard
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <CardImage src={card.image} alt={card.title} />
                <CardTitle>{card.title}</CardTitle>
              </LinkCard>
            ))}
          </LinksGrid>
        </LinksSection>
      </Container>
    </InsiderSection>
  );
};
