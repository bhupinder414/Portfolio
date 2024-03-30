import { styled } from "styled-components";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import { useStateData } from "../context/StateContext";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

function Container() {
  const { barsClicked, deviceSize } = useStateData();

  return (
    <StyledContainer>
      <Header />
      <SideBar />
      {deviceSize === "small" ? (
        barsClicked ? null : (
          <Main key={deviceSize}>
            <Outlet />
          </Main>
        )
      ) : (
        <Main key={deviceSize}>
          <Outlet />
        </Main>
      )}
      <Footer />
    </StyledContainer>
  );
}

export default Container;
