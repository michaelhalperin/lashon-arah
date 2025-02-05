import styled from "styled-components";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const CheckoutSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 2rem;
  text-align: right;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.95rem;

  &::after {
    content: " (חובה)";
    color: ${({ theme }) => theme.colors.red};
  }
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  direction: rtl;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.red};
  }
`;

const OrderSummary = styled.div`
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

const ShippingNote = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.red};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 2rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Checkout = () => {
  const { cartItems, getCartTotal } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const total = getCartTotal();
  const shipping = total >= 100 ? 0 : 30;

  return (
    <CheckoutSection>
      <Container>
        <Title>עגלת קניות</Title>

        {cartItems.length === 0 ? (
          <>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              סל הקניות שלך ריק כרגע.
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.history.back()}
              style={{
                background: "none",
                border: "none",
                color: "#666",
                cursor: "pointer",
                display: "block",
                margin: "0 auto",
              }}
            >
              חזור לחנות
            </motion.button>
          </>
        ) : (
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">השם שלך</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">האימייל שלך</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="phone">מס׳ הפלאפון שלך</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="address">כתובת למשלוח</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="city">עיר</Label>
              <Input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </InputGroup>

            <ShippingNote>
              דואגים לכם למשלוח חינם! ברכישה מעל 100 ש"ח - משלוח חינם לנקודות
              האיסוף ברחבי הארץ
            </ShippingNote>

            <OrderSummary>
              <SummaryRow>
                <span>סכום ביניים:</span>
                <span>₪{total}</span>
              </SummaryRow>
              <SummaryRow>
                <span>משלוח:</span>
                <span>₪{shipping}</span>
              </SummaryRow>
              <SummaryRow total>
                <span>סה"כ:</span>
                <span>₪{total + shipping}</span>
              </SummaryRow>
            </OrderSummary>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              שליחת הזמנה
            </SubmitButton>
          </Form>
        )}
      </Container>
    </CheckoutSection>
  );
};
