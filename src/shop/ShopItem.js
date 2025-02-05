import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ItemCard = styled(motion.div)`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${ItemCard}:hover & {
    transform: scale(1.05);
  }
`;

const ItemContent = styled.div`
  padding: 1.5rem;
  text-align: right;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemPrice = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
  margin: 1rem 0;
`;

const ItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
  font-size: 0.9rem;
  flex-grow: 1;
`;

export const ShopItem = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/${item.id}`);
  };

  return (
    <ItemCard
      onClick={handleClick}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <ImageContainer>
        <ItemImage
          src={item.image}
          alt={item.name}
          loading="lazy"
          onError={(e) => {
            console.error("Image failed to load:", item.image);
            e.target.style.display = "none";
          }}
        />
      </ImageContainer>
      <ItemContent>
        <ItemTitle>{item.name}</ItemTitle>
        <ItemDescription>{item.description}</ItemDescription>
        <ItemPrice>₪{item.price}</ItemPrice>
      </ItemContent>
    </ItemCard>
  );
};
