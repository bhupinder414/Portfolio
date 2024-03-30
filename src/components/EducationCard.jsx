import { FaUniversity } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Card from "./Card";
import styled from "styled-components";
import { useStateData } from "../context/StateContext";

const StyledDiv = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: larger;
`;

const StyledHr = styled.hr`
  color: var(--color-active-link);
  border: 1px solid;
  margin-bottom: 1rem;
`;

function EducationCard({ name, institution, years, score, category }) {
  const { deviceSize } = useStateData();
  const width = deviceSize === "small" ? "100%" : "80%";
  return (
    <>
      <Card
        cssconfiguration={{
          width,
          padding: "0px",
        }}
      >
        <h3 style={{ textAlign: "center", padding: "1rem" }}>{category}</h3>
        <StyledHr />
        <StyledDiv>
          <MdOutlineSchool style={{ width: "2.5rem", height: "2.5rem" }} />
          <span>{name}</span>
        </StyledDiv>
        <StyledDiv>
          <FaUniversity style={{ width: "2.5rem", height: "2.5rem" }} />
          <span>{institution}</span>
        </StyledDiv>
        <StyledDiv>
          <FaCalendarAlt style={{ width: "2.5rem", height: "2.5rem" }} />
          <span>{years}</span>
        </StyledDiv>
        <StyledDiv>
          <GrScorecard style={{ width: "2.5rem", height: "2.5rem" }} />
          <span>{score}</span>
        </StyledDiv>
      </Card>
    </>
  );
}

export default EducationCard;
