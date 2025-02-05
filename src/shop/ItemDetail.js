import styled from "styled-components";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { QuantityPicker } from './QuantityPicker';
import { 
  FaWhatsapp, 
  FaFacebook, 
  FaTelegram, 
  FaTwitter, 
  FaLink 
} from 'react-icons/fa';

const DetailSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
  min-height: 100vh;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const DetailContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ItemInfo = styled.div`
  text-align: right;
`;

const ItemTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const ItemPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.red};
  margin: 1.5rem 0;
`;

const ItemDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const AddToCartButton = styled(Button)`
  width: 100%;
  max-width: 300px;
  margin-top: 2rem;
`;

const ShareSection = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const ShareTitle = styled.h3`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1rem;
`;

const ShareButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const ShareButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme, $platform }) => {
    switch ($platform) {
      case 'whatsapp': return '#25D366';
      case 'facebook': return '#1877F2';
      case 'telegram': return '#0088cc';
      case 'twitter': return '#1DA1F2';
      default: return theme.colors.text.primary;
    }
  }};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;

export const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showCopiedFeedback, setShowCopiedFeedback] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(item, quantity);
    
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 1000);
  };

  const shareUrl = window.location.href;
  const shareText = `בדקו את ${item.name} בחנות שלנו!`;

  const handleShare = (platform) => {
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      telegram: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setShowCopiedFeedback(true);
        setTimeout(() => setShowCopiedFeedback(false), 2000);
      });
    } else {
      window.open(urls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  if (!item) {
    return (
      <DetailSection>
        <Container>
          <div>Item not found</div>
        </Container>
      </DetailSection>
    );
  }

  return (
    <DetailSection>
      <Container>
        <BackButton
          onClick={() => navigate('/shop')}
          whileHover={{ x: -5 }}
        >
          ← חזרה לחנות
        </BackButton>
        
        <DetailContent>
          <ImageContainer>
            <ItemImage src={item.image} alt={item.name} />
          </ImageContainer>
          
          <ItemInfo>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
            <ItemPrice>₪{item.price}</ItemPrice>
            
            <QuantityPicker 
              quantity={quantity} 
              setQuantity={setQuantity}
              min={1}
              max={99}
            />
            
            <AddToCartButton 
              variant="primary"
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? 'נוסף לסל!' : `הוסף לסל - ₪${(item.price * quantity).toFixed(2)}`}
            </AddToCartButton>

            <ShareSection>
              <ShareTitle>שתפו את המוצר</ShareTitle>
              <ShareButtons>
                <ShareButton
                  $platform="whatsapp"
                  onClick={() => handleShare('whatsapp')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaWhatsapp />
                </ShareButton>
                <ShareButton
                  $platform="facebook"
                  onClick={() => handleShare('facebook')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFacebook />
                </ShareButton>
                <ShareButton
                  $platform="telegram"
                  onClick={() => handleShare('telegram')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTelegram />
                </ShareButton>
                <ShareButton
                  $platform="twitter"
                  onClick={() => handleShare('twitter')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTwitter />
                </ShareButton>
                <ShareButton
                  onClick={() => handleShare('copy')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLink />
                  {showCopiedFeedback && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        bottom: '-25px',
                        fontSize: '0.8rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      הקישור הועתק!
                    </motion.span>
                  )}
                </ShareButton>
              </ShareButtons>
            </ShareSection>
          </ItemInfo>
        </DetailContent>
      </Container>
    </DetailSection>
  );
}; 