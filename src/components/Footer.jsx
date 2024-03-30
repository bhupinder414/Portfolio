import { styled } from "styled-components";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useData } from "../context/DataProviderContext";

const StyledFooter = styled.footer`
  background-color: var(--color-footer-background);
  text-align: center;
  padding: 1.5rem;
  font-size: larger;
`;

function Footer() {
  const { name, copyRightYear } = useData();
  return (
    <StyledFooter>
      Copyright <AiOutlineCopyrightCircle style={{ verticalAlign: "middle" }} />{" "}
      {copyRightYear} {name}. All rights reserved.
    </StyledFooter>
  );
}

export default Footer;
