import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiHome } from 'react-icons/hi';

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${({ scrolled }) => scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  box-shadow: ${({ scrolled }) => scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ scrolled }) => scrolled ? '0.5rem 2rem' : '1rem 2rem'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  position: relative;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const NavLink = styled(motion(Link))`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem 0;
  text-decoration: none;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.red};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.colors.red};
    &:after {
      width: 100%;
    }
  }
`;

const HomeLink = styled(motion(Link))`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  margin-right: -1rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.red};
    background: rgba(255, 255, 255, 0.1);
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2
      }
    }
  };

  const homeVariants = {
    hover: {
      scale: 1.1,
      rotate: -10,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav scrolled={scrolled}>
      <NavContainer scrolled={scrolled}>
        <HomeLink 
          to="/"
          variants={homeVariants}
          whileHover="hover"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }}
        >
          <HiHome />
        </HomeLink>
        <NavLinks>
          <NavLink 
            to="/about"
            variants={linkVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/about');
            }}
          >
            אודות
          </NavLink>
          <NavLink 
            to="/activities"
            variants={linkVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/activities');
            }}
          >
            הפעילות שלנו
          </NavLink>
          <NavLink 
            to="/partners"
            variants={linkVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/partners');
            }}
          >
            הצטרפו אלינו
          </NavLink>
          <NavLink 
            to="/donate"
            variants={linkVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/donate');
            }}
          >
            תרומה
          </NavLink>
          <NavLink 
            to="/contact"
            variants={linkVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/contact');
            }}
          >
            צרו קשר
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}; 