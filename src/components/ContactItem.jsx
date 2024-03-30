import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  padding: 0.5rem 0rem;
`;

function ContactItem({ children }) {
  return <Item>{children}</Item>;
}

export default ContactItem;
