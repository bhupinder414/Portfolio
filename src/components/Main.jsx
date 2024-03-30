import { styled } from "styled-components";

const StyledMain = styled.main`
  background-color: var(--color-main-background);
  padding: 4rem 4.8rem 6.4rem;
  word-break: auto-phrase;
`;

function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
