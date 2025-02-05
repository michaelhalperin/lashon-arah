import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { RiCloseLine, RiDeleteBinLine } from "react-icons/ri";
import { Button } from "../components/common/Button";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

const Sidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: ${({ theme }) => theme.colors.red};
  }
`;

const CartItems = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin: 0 -2rem;
  padding: 0 2rem;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-left: 1rem;
`;

const ItemInfo = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemPrice = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
`;

const ItemQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const QuantityButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.red};
  }
`;

const RemoveButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
    opacity: 1;
  }
`;

const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const Summary = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: ${({ total }) => (total ? "1.2rem" : "1rem")};
  font-weight: ${({ total }) => (total ? "600" : "normal")};
`;

export const CartSidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleCheckout = () => {
    onClose();
    navigate("/shop/checkout");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <Sidebar
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <Header>
              <Title>עגלת קניות</Title>
              <CloseButton onClick={onClose}>
                <RiCloseLine />
              </CloseButton>
            </Header>

            <CartItems>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  העגלה ריקה
                </div>
              ) : (
                cartItems.map((item) => (
                  <CartItem key={item.id}>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemInfo>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>₪{item.price}</ItemPrice>
                      <ItemControls>
                        <ItemQuantity>
                          <QuantityButton
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </QuantityButton>
                          <span>{item.quantity}</span>
                          <QuantityButton
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </QuantityButton>
                        </ItemQuantity>
                        <RemoveButton
                          onClick={() => handleRemoveItem(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="הסר מהעגלה"
                        >
                          <RiDeleteBinLine />
                        </RemoveButton>
                      </ItemControls>
                    </ItemInfo>
                  </CartItem>
                ))
              )}
            </CartItems>

            <Summary>
              <SummaryRow>
                <span>סכום ביניים:</span>
                <span>₪{getCartTotal()}</span>
              </SummaryRow>
              <SummaryRow>
                <span>משלוח:</span>
                <span>₪0</span>
              </SummaryRow>
              <SummaryRow total>
                <span>סה"כ:</span>
                <span>₪{getCartTotal()}</span>
              </SummaryRow>
              <Button
                variant="primary"
                style={{ width: "100%", marginTop: "1rem" }}
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                המשך לתשלום
              </Button>
            </Summary>
          </Sidebar>
        </>
      )}
    </AnimatePresence>
  );
};
