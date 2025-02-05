import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.error.main};
`;

const ErrorTitle = styled.h1`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 2rem;
`;

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>משהו השתבש</ErrorTitle>
          <ErrorMessage>
            אנו מתנצלים על התקלה. אנא נסו לרענן את העמוד או חזרו מאוחר יותר.
          </ErrorMessage>
          <Button onClick={() => window.location.reload()}>
            טען מחדש
          </Button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
} 