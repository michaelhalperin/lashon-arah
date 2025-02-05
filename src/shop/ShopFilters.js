import styled from "styled-components";
import { motion } from "framer-motion";

const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.red};
  border-radius: 25px;
  background: ${({ active, theme }) => 
    active ? theme.colors.red : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.text.light : theme.colors.red};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

export const ShopFilters = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: "all", name: "הכל" },
    { id: "shirts", name: "חולצות" },
    { id: "accessories", name: "אביזרים" },
    { id: "books", name: "ספרים" },
    { id: "stickers", name: "מדבקות" },
  ];

  return (
    <FiltersContainer>
      {categories.map((category) => (
        <FilterButton
          key={category.id}
          active={selectedCategory === category.id}
          onClick={() => setSelectedCategory(category.id)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category.name}
        </FilterButton>
      ))}
    </FiltersContainer>
  );
};