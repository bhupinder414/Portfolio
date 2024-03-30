import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { LiaLaptopSolid } from "react-icons/lia";
import {
  MdOutlineWorkOutline,
  MdOutlineSchool,
  MdOutlineDescription,
  MdOutlineMailOutline,
} from "react-icons/md";
import { useStateData } from "../context/StateContext";

const StyledNavBar = styled.nav`
  padding: 1rem;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  font-weight: bold;
  padding: 0.5rem 0rem;
`;

const StyledSpan = styled.span`
  vertical-align: bottom;
  font-size: 2.1rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-active-link);
    background-color: var(--color-link-background);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-active-link);
    font-weight: bold;
  }
`;

function SideBarProfileList() {
  const { toggleBars } = useStateData();
  return (
    <StyledNavBar>
      <StyledList>
        <StyledItem>
          <StyledNavLink to="/" onClick={toggleBars}>
            <IoPersonOutline style={{ width: "2.5rem", height: "2.5rem" }} />
            <StyledSpan>About Me</StyledSpan>
          </StyledNavLink>
        </StyledItem>

        <StyledItem>
          <StyledNavLink to="/skills" onClick={toggleBars}>
            <LiaLaptopSolid style={{ width: "2.5rem", height: "2.5rem" }} />
            <StyledSpan>Skills</StyledSpan>
          </StyledNavLink>
        </StyledItem>

        <StyledItem>
          <StyledNavLink to="/projects" onClick={toggleBars}>
            <HiOutlineRocketLaunch
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
            <StyledSpan>Projects</StyledSpan>
          </StyledNavLink>
        </StyledItem>

        <StyledItem>
          <StyledNavLink to="/work-experience" onClick={toggleBars}>
            <MdOutlineWorkOutline
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
            <StyledSpan>Work Experience</StyledSpan>
          </StyledNavLink>
        </StyledItem>

        <StyledItem>
          <StyledNavLink to="/education" onClick={toggleBars}>
            <MdOutlineSchool style={{ width: "2.5rem", height: "2.5rem" }} />
            <StyledSpan>Education</StyledSpan>
          </StyledNavLink>
        </StyledItem>

        <StyledItem>
          <StyledNavLink to="/contact" onClick={toggleBars}>
            <MdOutlineMailOutline
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
            <StyledSpan>Contact</StyledSpan>
          </StyledNavLink>
        </StyledItem>

        <StyledItem>
          <StyledNavLink to="/resume" onClick={toggleBars}>
            <MdOutlineDescription
              style={{ width: "2.5rem", height: "2.5rem" }}
            />
            <StyledSpan>Resume</StyledSpan>
          </StyledNavLink>
        </StyledItem>
      </StyledList>
    </StyledNavBar>
  );
}

export default SideBarProfileList;
