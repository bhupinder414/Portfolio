import Accordion from "./Accordion";
import styled from "styled-components";
import Card from "./Card";
import { GoDotFill } from "react-icons/go";
import { useState } from "react";
import { useData } from "../context/DataProviderContext";
import { useStateData } from "../context/StateContext";

const StyledLogo = styled.img``;

const StyledHeading = styled.h3`
  margin: 1rem 0rem;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
`;

const StyledTechnology = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0rem;
  flex-wrap: wrap;
`;

const StyledList = styled.ul``;

const StyledListItem = styled.li`
  color: var(--achievment-list-color);
  display: grid;
  grid-template-columns: 2rem 1fr;
  gap: 1rem;
  padding: 0.2rem;
`;

const StyledDescription = styled.div`
  color: var(--description-list-color);
`;

function WorkContainer() {
  const [openAccId, setOpenAccId] = useState("1");
  const { deviceSize } = useStateData();
  const { work } = useData();

  function handleOpenAccordion(id) {
    setOpenAccId(id);
  }

  return (
    <div>
      {work.map((item) => (
        <Accordion
          key={item.id}
          id={item.id}
          isopen={openAccId === item.id}
          handleOpenAccordion={handleOpenAccordion}
          cssconfigurationheading={{
            width: "100%",
            padding: "1rem",
          }}
          cssconfigurationcontainer={{
            width: "100%",
            padding: "1rem",
          }}
        >
          <Accordion.Heading>
            <StyledHeadingContainer>
              <StyledLogo src={item.logo} alt="logo" />
              {deviceSize == "large" && (
                <StyledHeading>{item.companyName}</StyledHeading>
              )}
              <Card
                cssconfiguration={{
                  padding: "1rem",
                  "background-color": "var(--background-card-2)",
                }}
              >
                {item.designation}
              </Card>
              {deviceSize == "large" && (
                <Card
                  cssconfiguration={{
                    padding: "1rem",
                    "background-color": "var(--background-card-1)",
                  }}
                >
                  {item.startDate} - {item.endDate ? `${item.endDate}` : `Present`}
                </Card>
              )}
            </StyledHeadingContainer>
          </Accordion.Heading>
          <Accordion.Container>
            <StyledHeading>Description:</StyledHeading>
            <StyledDescription>{item.description}</StyledDescription>
            <StyledHeading>Achievements:</StyledHeading>
            <StyledList>
              {item.achievements.map((achievement) => (
                <StyledListItem key={achievement}>
                  <GoDotFill style={{ marginTop: "0.2rem" }} />
                  {achievement}
                </StyledListItem>
              ))}
            </StyledList>
            <StyledHeading>Technologies Used:</StyledHeading>
            <StyledTechnology>
              {item.technologyUsed.map((tech) => (
                <Card
                  cssconfiguration={{
                    padding: "1rem 1.5rem",
                  }}
                  key={tech}
                >
                  {tech}
                </Card>
              ))}
            </StyledTechnology>
          </Accordion.Container>
        </Accordion>
      ))}
    </div>
  );
}

export default WorkContainer;
