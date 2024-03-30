import styled from "styled-components";
import Card from "./Card";

const StyledDiv = styled.div`
  text-align: center;
`;

const StyledSpan = styled.span`
  padding: 1rem;
`;

const StyledHr = styled.hr`
  color: var(--color-active-link);
  border: 1px solid;
  margin-bottom: 1rem;
`;

function SkillsCard({ Icon, name }) {
  return (
    <Card
      cssconfiguration={{
        width: "120px",
        height: "130px",
        padding: "0px",
      }}
    >
      <StyledDiv>
        <Icon style={{ width: "8rem", height: "8rem", paddingTop: "0.5rem" }} />
        <StyledHr />
        <StyledSpan>{name}</StyledSpan>
      </StyledDiv>
    </Card>
  );
}

export default SkillsCard;
