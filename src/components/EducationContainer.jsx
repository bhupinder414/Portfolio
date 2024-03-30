import styled from "styled-components";
import EducationCard from "./EducationCard";
import { useData } from "../context/DataProviderContext";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    justify-items: center;
  }

  @media (min-width: 577px) and (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    justify-items: center;
  }
`;

const StyledHeading = styled.h2`
  color: var(--color-active-link);
  text-align: center;
  padding: 2rem 2rem 5rem;
`;

function EducationContainer() {
  const { education } = useData();
  return (
    <>
      <StyledHeading>Education Details</StyledHeading>
      <StyledDiv>
        {education.map((item) => (
          <EducationCard key={item.id} {...item} />
        ))}
      </StyledDiv>
    </>
  );
}

export default EducationContainer;
