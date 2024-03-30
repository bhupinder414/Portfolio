import ProjectCard from "./ProjectCard";
import styled from "styled-components";
import { useData } from "../context/DataProviderContext";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 4rem;
  justify-items: center;

  @media (max-width: 576px) {
    justify-content: space-around;
    grid-gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-template-rows: auto;
  }

  @media (min-width: 577px) and (max-width: 991px) {
    justify-content: space-between;
    grid-gap: 1rem;
    justify-items: center;
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
    grid-template-rows: auto;
  }
`;

function ProjectCardContainer() {
  const { projects } = useData();
  return (
    <StyledDiv>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </StyledDiv>
  );
}

export default ProjectCardContainer;
