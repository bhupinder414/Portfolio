import { styled } from "styled-components";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useDarkMode } from "./../context/DarkModeContext";

const StyledSpan = styled.span`
  border: 1px solid var(--color-logo);
  border-radius: 50%;
  padding: 0.3rem 0.4rem;
  height: 5rem;
  width: 5rem;
  float: right;
  margin: 0.5rem;
  background-color: var(--color-logo);
`;

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <StyledSpan onClick={toggleDarkMode}>
      {isDarkMode && <HiOutlineSun style={{ width: "4rem", height: "4rem" }} />}
      {!isDarkMode && (
        <HiOutlineMoon style={{ width: "4rem", height: "4rem" }} />
      )}
    </StyledSpan>
  );
}

export default ToggleDarkMode;
