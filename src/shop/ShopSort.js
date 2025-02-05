import styled from "styled-components";
import { HiSortDescending } from "react-icons/hi";

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  justify-content: flex-end;
`;

const SortLabel = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background: white;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  font-size: 0.9rem;
  direction: rtl;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.red};
  }
`;

const sortOptions = [
  { value: "default", label: "ברירת מחדל" },
  { value: "price-low", label: "מחיר: מהנמוך לגבוה" },
  { value: "price-high", label: "מחיר: מהגבוה לנמוך" },
  { value: "name-asc", label: "שם: א-ת" },
  { value: "name-desc", label: "שם: ת-א" },
  { value: "newest", label: "החדשים ביותר" },
];

export const ShopSort = ({ currentSort, onSortChange }) => {
  return (
    <SortContainer>
      <SortLabel>
        <HiSortDescending />
        מיין לפי:
      </SortLabel>
      <SortSelect
        value={currentSort}
        onChange={(e) => onSortChange(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SortSelect>
    </SortContainer>
  );
}; 