import styled from "styled-components";
import { css } from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";
import { Link } from "react-router-dom";
import { largest, lt_largest } from "../utils/media-queries";

const StyledLogo = styled.div`
  text-align: center;

  ${lt_largest(css`
    position: fixed;
    top: 0;
    left: 0;
  `)}
`;

const Img = styled.img`
  ${largest(css`
    height: 9.6rem;
  `)}

  ${lt_largest(css`
    height: 6.1rem;
  `)}

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
