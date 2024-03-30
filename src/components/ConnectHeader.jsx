import styled from "styled-components";
import { useData } from "../context/DataProviderContext";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: inherit;

  @media (max-width: 768px) {
    display: none;
  }
`;
const StyledHeading = styled.h2`
  font-size: x-large;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  &:hover {
    color: var(--color-active-link);
  }
`;

function ConnectHeader() {
  const { contactDetail } = useData();

  return (
    <StyledDiv>
      <StyledHeading>Let&apos;s Stay Connected:</StyledHeading>
      {contactDetail.map((ele) => {
        if (ele.type === "linkedIn" || ele.type === "github") {
          return (
            <StyledLink key={ele.id} to={ele.link} target={ele.target}>
              <ele.logo style={{ width: "4rem", height: "4rem" }} />
            </StyledLink>
          );
        }
      })}
    </StyledDiv>
  );
}

export default ConnectHeader;
