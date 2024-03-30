import styled from "styled-components";
import { Link } from "react-router-dom";
import { useStateData } from "../context/StateContext";

const StyledHeading = styled.h2`
  text-align: center;
  padding: 1rem 0rem;
  border-bottom: 1px solid;
  margin-bottom: 1rem;
  color: var(--color-active-link);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 576px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 577px) and (max-width: 991px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledSpan = styled.span`
  font-size: 2.2rem;
  word-break: auto-phrase;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  &:hover {
    color: var(--color-active-link);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

function ContactMeSection({ heading, data }) {
  const { deviceSize } = useStateData();
  return (
    <>
      <StyledHeading>{heading}</StyledHeading>
      <StyledContainer>
        {data.map((item) =>
          item.link ? (
            <StyledLink key={item.id} to={item.link} target={item.target}>
              <item.logo style={{ width: "5rem", height: "5rem" }} />
              {deviceSize == "large" && <StyledSpan>{item.value}</StyledSpan>}
            </StyledLink>
          ) : (
            <StyledDiv key={item.id}>
              <item.logo style={{ width: "5rem", height: "5rem" }} />
              <StyledSpan>{item.value}</StyledSpan>
            </StyledDiv>
          )
        )}
      </StyledContainer>
    </>
  );
}

export default ContactMeSection;
