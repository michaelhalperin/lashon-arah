import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Join } from "./components/sections/Join";
import { ErrorBoundary } from "./components/sections/ErrorBoundary";
import { Activities } from "./components/sections/Activities";
import { Newsletter } from "./components/sections/Newsletter";
import { Donate } from "./pages/Donate";
import { AccessibilityProvider } from "./context/AccessibilityContext";
import { AccessibilityWidget } from "./components/common/AccessibilityWidget";
import { AboutUs } from "./pages/subpages/AboutUs";
import { Campaigns } from "./pages/subpages/Campaigns";
import { Programs } from "./pages/subpages/Programs";
import { Ambassadors } from "./pages/subpages/Ambassadors";
import { Distributions } from "./pages/subpages/Distributions";
import { Partners } from "./pages/Partners";
import { ContactUs } from "./pages/subpages/ContactUs";
import { Terms } from "./pages/subpages/Terms";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/join" element={<Join />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/ambassadors" element={<Ambassadors />} />
        <Route path="/distributions" element={<Distributions />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AccessibilityProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <AnimatedRoutes />
            <ScrollToTop />
            <Newsletter />
            <Footer />
            <AccessibilityWidget />
          </ThemeProvider>
        </Router>
      </AccessibilityProvider>
    </ErrorBoundary>
  );
}

export default App;
