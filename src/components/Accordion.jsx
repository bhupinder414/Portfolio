import styled from "styled-components";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { createContext, useContext } from "react";

const StyledDivContainer = styled.div`
  border: 1px solid var(--color-active-link);
  border-radius: 0px 0px 10px 10px;
  ${(props) => props.cssconfiguration}
`;

const StyledDivHeading = styled.div`
  border: 1px solid var(--color-active-link);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  gap: 3rem;
  ${(props) => props.cssconfiguration};
`;

const AccordionContext = createContext();

function Accordion({
  cssconfigurationheading,
  cssconfigurationcontainer,
  children,
  handleOpenAccordion,
  isopen,
  id,
}) {
  return (
    <AccordionContext.Provider
      value={{
        isopen,
        handleOpenAccordion,
        cssconfigurationcontainer,
        cssconfigurationheading,
        id,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
}

function Container({ children }) {
  {
    const { isopen, cssconfigurationcontainer } = useContext(AccordionContext);
    return isopen ? (
      <StyledDivContainer
        cssconfiguration={{
          ...cssconfigurationcontainer,
          "margin-bottom": isopen ? "1rem" : "0rem",
        }}
      >
        {children}
      </StyledDivContainer>
    ) : null;
  }
}

function Heading({ children }) {
  const { isopen, handleOpenAccordion, cssconfigurationheading, id } =
    useContext(AccordionContext);

  return (
    <StyledDivHeading
      onClick={() => handleOpenAccordion(id)}
      cssconfiguration={{
        ...cssconfigurationheading,
        "border-radius": isopen ? "10px 10px 0px 0px" : "10px",
        "margin-bottom": isopen ? "0rem" : "1rem",
      }}
    >
      <div>{children}</div>
      {isopen ? (
        <FaMinusCircle style={{ minWidth: "5rem", minHeight: "5rem" }} />
      ) : (
        <FaPlusCircle style={{ minWidth: "5rem", minHeight: "5rem" }} />
      )}
    </StyledDivHeading>
  );
}

Accordion.Heading = Heading;
Accordion.Container = Container;

export default Accordion;
