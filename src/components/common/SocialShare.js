import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTelegram,
  FaLink,
} from "react-icons/fa";

const ShareContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`;

const ShareButton = styled(motion.button)`
  background: ${({ theme, network }) => {
    switch (network) {
      case "facebook":
        return "#3b5998";
      case "twitter":
        return "#1DA1F2";
      case "whatsapp":
        return "#25D366";
      case "telegram":
        return "#0088cc";
      default:
        return theme.colors.secondary;
    }
  }};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

export const SocialShare = ({ url, title }) => {
  const shareData = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    whatsapp: `https://wa.me/?text=${title} ${url}`,
    telegram: `https://t.me/share/url?url=${url}&text=${title}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      alert("הקישור הועתק בהצלחה!");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <ShareContainer>
      {Object.entries(shareData).map(([network, shareUrl]) => (
        <ShareButton
          key={network}
          network={network}
          as="a"
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`שתף ב-${network}`}
        >
          {network === "facebook" && <FaFacebook />}
          {network === "twitter" && <FaTwitter />}
          {network === "whatsapp" && <FaWhatsapp />}
          {network === "telegram" && <FaTelegram />}
        </ShareButton>
      ))}
      <ShareButton
        onClick={copyToClipboard}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="העתק קישור"
      >
        <FaLink />
      </ShareButton>
    </ShareContainer>
  );
};
