import { Link } from "react-router-dom";
import styled from "styled-components";
import { useData } from "../context/DataProviderContext";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledHeading = styled.h1`
  text-align: center;
  font-size: xxx-large;
  color: var(--color-active-link);
  @media (max-width: 768px) {
    font-size: 3.1rem;
  }
`;

const StyledPara = styled.p`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-active-link);
  &:hover {
    color: var(--color-active-link-hover);
  }
`;

function About() {
  const { designation, about } = useData();
  return (
    <StyledContainer>
      <StyledHeading>{designation}</StyledHeading>
      {about.map((item) => {
        if (item.includes("<StyledLink")) {
          let arr = item.split("<StyledLink");
          let to = arr[1]
            .slice(0, arr[1].indexOf(">"))
            .split("=")[1]
            .slice(1, -1);
          let content = arr[1].slice(
            arr[1].indexOf(">") + 1,
            arr[1].indexOf("<")
          );

          return (
            <StyledPara key={item}>
              {arr[0]}
              <StyledLink to={to}>{content}</StyledLink>
            </StyledPara>
          );
        }
        return <StyledPara key={item}>{item}</StyledPara>;
      })}
    </StyledContainer>
  );
}

export default About;
