import { styled } from "styled-components";
import image from "./../assets/img.jpg";
import { useData } from "../context/DataProviderContext";

const StyledAvatar = styled.div`
  text-align: center;
  height: 40rem;
`;

const StyledImage = styled.img`
  border: 1px solid var(--color-grey-200);
  width: 85%;
  height: 70%;
  border-radius: 10%;
  margin-bottom: 2rem;
  @media (min-width: 577px) and (max-width: 991px) {
    width: 50%;
  }
`;

const StyledSpan = styled.span`
  font-size: 3rem;
  font-weight: bolder;
  color: var(--color-grey-600);
  @media (max-width: 768px) {
    display: block;
  }
`;

function Avatar() {
  const { name } = useData();
  return (
    <StyledAvatar>
      <StyledImage src={image} alt={`${name}'s image`}></StyledImage>
      <StyledSpan>{name}</StyledSpan>
    </StyledAvatar>
  );
}

export default Avatar;
