import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchContainer = styled.div`
  position: relative;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1.2rem;
  cursor: pointer;
`;

const SearchOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh;
  z-index: 1000;
`;

const SearchForm = styled.form`
  width: 90%;
  max-width: 600px;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  font-size: 1.1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  font-size: 1.2rem;
`;

const SearchResults = styled.div`
  margin-top: 1rem;
  max-height: 300px;
  overflow-y: auto;
`;

const ResultItem = styled(motion.div)`
  padding: 0.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.secondary};
  cursor: pointer;
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // Add your search logic here
    // This is a mock example
    const mockResults = [
      { id: 1, title: 'אודות המיזם', path: '/about' },
      { id: 2, title: 'הפעילות שלנו', path: '/activities' },
      { id: 3, title: 'הצטרפו אלינו', path: '/join' },
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(mockResults);
  };

  const handleResultClick = (path) => {
    setIsOpen(false);
    setQuery('');
    navigate(path);
  };

  return (
    <SearchContainer>
      <SearchButton onClick={() => setIsOpen(true)} aria-label="חיפוש">
        <FaSearch />
      </SearchButton>

      <AnimatePresence>
        {isOpen && (
          <SearchOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <SearchForm onClick={e => e.stopPropagation()} onSubmit={handleSearch}>
              <CloseButton onClick={() => setIsOpen(false)}>
                <FaTimes />
              </CloseButton>
              
              <SearchInput
                ref={inputRef}
                type="text"
                placeholder="חיפוש..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />

              <SearchResults>
                {results.map((result) => (
                  <ResultItem
                    key={result.id}
                    onClick={() => handleResultClick(result.path)}
                    whileHover={{ x: 10 }}
                  >
                    {result.title}
                  </ResultItem>
                ))}
              </SearchResults>
            </SearchForm>
          </SearchOverlay>
        )}
      </AnimatePresence>
    </SearchContainer>
  );
}; 