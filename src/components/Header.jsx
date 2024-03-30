import { styled } from "styled-components";
import ToggleDarkMode from "./ToggleDarkMode";
import ConnectHeader from "./ConnectHeader";
import { HiBars4 } from "react-icons/hi2";
import { useStateData } from "../context/StateContext";
import { RxCross2 } from "react-icons/rx";

const StyledHeader = styled.header`
  background-color: var(--color-header-background);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 0.5rem;
  gap: 1rem;
`;

const StyledBars = styled(HiBars4)`
  width: 4rem;
  height: 4rem;
  display: none;
  color: ${(props) => (props.barsClicked ? "var(--color-active-link)" : "")};

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledCross = styled(RxCross2)`
  width: 4rem;
  height: 4rem;
  display: none;
  color: ${(props) => (props.barsClicked ? "var(--color-active-link)" : "")};
  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLink = styled.a`
  cursor: pointer;
  transition: all 0.3s;
`;

function Header() {
  const { toggleBars, barsClicked, deviceSize } = useStateData();
  return (
    <StyledHeader>
      {deviceSize === "small" && (
        <StyledLink
          onClick={(e) => {
            e.preventDefault();
            toggleBars();
          }}
        >
          {barsClicked ? (
            <StyledCross barsClicked={barsClicked} />
          ) : (
            <StyledBars barsClicked={barsClicked} />
          )}
        </StyledLink>
      )}
      <ConnectHeader />
      <ToggleDarkMode />
    </StyledHeader>
  );
}

export default Header;
