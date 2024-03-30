import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorDiv = styled.div`
  text-align: center;
  margin: 2%;
`;

const StyledLink = styled(Link)`
  background-color: var(--color-active-link);
  padding: 1rem 2rem;
  margin: 1rem;
  display: inline-block;
  border-radius: 10px;
  color: white;
`;

function ErrorElement() {
  return (
    <ErrorDiv>
      <h1>Page Not Found</h1>
      <p>Sorry, the page you&apos;re looking for could not be found.</p>
      <StyledLink to="/">Go to Homepage</StyledLink>
    </ErrorDiv>
  );
}

export default ErrorElement;
