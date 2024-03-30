import { useData } from "../context/DataProviderContext";
import SkillsCard from "./SkillsCard";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 768px) {
    justify-content: space-around;
    grid-gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: auto;
  }
`;

const StyledHeading = styled.h2`
  color: var(--color-active-link);
  text-align: center;
  padding: 2rem;
`;

function SkillsContainer() {
  const { skills } = useData();
  return (
    <>
      <StyledHeading>Web Development</StyledHeading>
      <StyledDiv>
        {skills.map((skill) =>
          skill.category === "web-development" ? (
            <SkillsCard key={skill.id} {...skill} />
          ) : null
        )}
      </StyledDiv>

      <StyledHeading>Backend Development</StyledHeading>
      <StyledDiv>
        {skills.map((skill) =>
          skill.category === "backend-development" ? (
            <SkillsCard key={skill.id} {...skill} />
          ) : null
        )}
      </StyledDiv>

      <StyledHeading>Other Tools and Technologies</StyledHeading>
      <StyledDiv>
        {skills.map((skill) =>
          skill.category === "other" ? (
            <SkillsCard key={skill.id} {...skill} />
          ) : null
        )}
      </StyledDiv>
    </>
  );
}

export default SkillsContainer;
