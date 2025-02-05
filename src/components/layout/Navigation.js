import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiHome, HiUser, HiShoppingCart } from "react-icons/hi";
import { CartSidebar } from "../../shop/CartSidebar";
import { useCart } from "../../context/CartContext";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none")};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ scrolled }) => (scrolled ? "0.5rem 2rem" : "1rem 2rem")};
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
    content: "";
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

const ShopNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0.5rem;
    gap: 1rem;
  }
`;

const IconButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
`;

const CartBadge = styled(motion.span)`
  position: absolute;
  top: -8px;
  right: -8px;
  background: ${({ theme }) => theme.colors.red};
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  padding: 0 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HomeLink = styled(motion(Link))`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.7rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    background: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &.active {
    color: ${({ theme }) => theme.colors.red};
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
`;

const ShopNavLink = styled(NavLink)`
  background: ${({ theme }) => theme.colors.red};
  color: white !important;
  padding: 0.5rem 1.5rem !important;
  border-radius: 25px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(255, 0, 0, 0.2);

  &:after {
    display: none;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
    background: ${({ theme }) => `${theme.colors.red}ee`};
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1.2rem !important;
  }
`;

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isShopPage = location.pathname.startsWith("/shop");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  const homeVariants = {
    hover: {
      scale: 1.1,
      rotate: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Nav scrolled={scrolled}>
        <NavContainer scrolled={scrolled}>
          <HomeLink
            to="/"
            variants={homeVariants}
            whileHover="hover"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
          >
            <HiHome />
          </HomeLink>

          {isShopPage ? (
            <ShopNavLinks>
              <IconButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                // onClick={() => navigate("/shop/profile")}
              >
                <HiUser />
              </IconButton>

              <IconButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                style={{ position: "relative" }}
              >
                <HiShoppingCart />
                {cartCount > 0 && (
                  <CartBadge
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                  >
                    {cartCount}
                  </CartBadge>
                )}
              </IconButton>
            </ShopNavLinks>
          ) : (
            <NavLinks>
              <NavLink
                to="/about"
                variants={linkVariants}
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/about");
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
                  handleNavigation("/activities");
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
                  handleNavigation("/partners");
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
                  handleNavigation("/donate");
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
                  handleNavigation("/contact");
                }}
              >
                צרו קשר
              </NavLink>
              <ShopNavLink
                to="/shop"
                variants={linkVariants}
                whileHover="hover"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation("/shop");
                }}
              >
                חנות
              </ShopNavLink>
            </NavLinks>
          )}
        </NavContainer>
      </Nav>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
