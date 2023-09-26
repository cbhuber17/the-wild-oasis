import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";

const StyledLogo = styled.div`
  text-align: center;
  @media (max-width: 1250px) {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const Img = styled.img`
  @media (min-width: 1250px) {
    height: 9.6rem;
  }
  @media (max-width: 1250px) {
    height: 6.1rem;
  }
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode
    ? "/the-wild-oasis/logo-dark.png"
    : "/the-wild-oasis/logo-light.png";

  return (
    <StyledLogo>
      <Link to="/dashboard">
        <Img src={src} alt="Logo" />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
