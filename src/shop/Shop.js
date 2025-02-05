import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { ShopItem } from "./ShopItem";
import { ShopFilters } from "./ShopFilters";
import { ShopSort } from "./ShopSort";
import { mockItems } from "./mockData";

const ShopSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  h2 {
    font-size: ${({ theme }) => theme.typography.fontSize.title};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 4px;
      background: ${({ theme }) => theme.colors.red};
      border-radius: 2px;
    }
  }
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.8rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 25px;
  font-size: 1rem;
  direction: rtl;
  background: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.red};
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Shop = () => {
  const [items] = useState(mockItems);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentSort, setCurrentSort] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // Search and filter logic using useMemo for performance
  const filteredAndSearchedItems = useMemo(() => {
    // First, filter by search query
    let result = items;

    if (searchQuery.trim()) {
      const searchTerms = searchQuery.toLowerCase().split(" ");
      result = items.filter((item) => {
        const itemText =
          `${item.name} ${item.description} ${item.category}`.toLowerCase();
        return searchTerms.every((term) => itemText.includes(term));
      });
    }

    // Then, filter by category
    if (selectedCategory !== "all") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // Finally, sort the results
    switch (currentSort) {
      case "price-low":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...result].sort((a, b) => b.price - a.price);
      case "name-asc":
        return [...result].sort((a, b) => a.name.localeCompare(b.name, "he"));
      case "name-desc":
        return [...result].sort((a, b) => b.name.localeCompare(a.name, "he"));
      case "newest":
        return [...result].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      default:
        return result;
    }
  }, [items, searchQuery, selectedCategory, currentSort]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Reset category when searching
    if (e.target.value.trim() && selectedCategory !== "all") {
      setSelectedCategory("all");
    }
  };

  return (
    <ShopSection>
      <Container>
        <PageHeader>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            החנות שלנו
          </motion.h2>
        </PageHeader>

        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="חיפוש מוצרים..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </SearchContainer>

        <ShopFilters
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <ShopSort currentSort={currentSort} onSortChange={setCurrentSort} />

        <ItemsGrid>
          {filteredAndSearchedItems.length > 0 ? (
            filteredAndSearchedItems.map((item) => (
              <ShopItem key={item.id} item={item} />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "2rem",
                color: "#666",
              }}
            >
              לא נמצאו מוצרים התואמים את החיפוש
            </motion.div>
          )}
        </ItemsGrid>
      </Container>
    </ShopSection>
  );
};
