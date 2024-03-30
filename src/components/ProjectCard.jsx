import Card from "./Card";
import styled from "styled-components";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { useStateData } from "../context/StateContext";
import { Link } from "react-router-dom";

const StyledImage = styled.img`
  width: 100%;
  height: inherit;
  border-radius: 20px 20px 0px 0px;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 20rem;
`;

const StyledDiv = styled.div`
  padding: 1rem;
  ${(props) => props.cssconfiguration}
`;

const StyledHeading = styled.h3`
  text-align: center;
  padding: 1rem;
  color: var(--color-active-link);
  font-size: larger;
  border-top: 2px solid var(--color-active-link);
`;

const StyledSpan = styled.span`
  margin: 1rem 0rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  gap: 1rem;
  align-items: center;
  &:hover {
    color: var(--color-active-link);
  }
`;

function ProjectCard({ imgageSrc, name, description, websiteLink, target }) {
  const { deviceSize } = useStateData();
  const width = deviceSize === "small" ? "100%" : "60%";
  return (
    <Card
      cssconfiguration={{
        width,
        padding: "0px",
      }}
    >
      <StyledImageContainer>
        <StyledImage src={imgageSrc} alt="Project image" />
      </StyledImageContainer>
      <StyledHeading>{name}</StyledHeading>
      <StyledDiv>
        {description.map((item) => (
          <StyledSpan key={item}>{item}</StyledSpan>
        ))}
      </StyledDiv>
      <StyledDiv
        cssconfiguration={{
          display: "flex",
          gap: "2rem",
          "align-items": "center",
          "justify-content": "end",
        }}
      >
        <StyledLink to={websiteLink} target={target}>
          <HiOutlineExternalLink style={{ width: "4rem", height: "4rem" }} />
        </StyledLink>
        <FaGithub style={{ width: "4rem", height: "4rem" }} />
      </StyledDiv>
    </Card>
  );
}

export default ProjectCard;
