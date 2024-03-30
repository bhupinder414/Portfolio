import styled from "styled-components";

const StyledCardContainer = styled.div`
  background-color: var(--color-card-background);
  border: 1px solid var(--color-active-link);
  border-radius: 2rem;
  ${(props) => props.cssconfiguration}
`;

function Card({ children, cssconfiguration }) {
  return (
    <StyledCardContainer cssconfiguration={cssconfiguration}>
      {children}
    </StyledCardContainer>
  );
}

export default Card;
