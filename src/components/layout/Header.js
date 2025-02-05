import styled from "styled-components";
import { Navigation } from "./Navigation";

const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
    </HeaderContainer>
  );
};
