import { styled } from "styled-components";
import Avatar from "./Avatar";
import SideBarProfileList from "./SideBarProfileList";
import { useStateData } from "../context/StateContext";

const StyledSideBar = styled.aside`
  background-color: var(--color-sidebar-background);
  padding: 2.2rem 1.4rem;
  border-right: 2px solid var(--color-header-background);
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    grid-row: auto;
  }
`;

function SideBar() {
  const { barsClicked, deviceSize } = useStateData();
  return (
    <StyledSideBar>
      {deviceSize === "small" ? (
        barsClicked ? (
          <SideBarProfileList />
        ) : (
          <Avatar />
        )
      ) : (
        <>
          <Avatar />
          <SideBarProfileList />
        </>
      )}
    </StyledSideBar>
  );
}

export default SideBar;
