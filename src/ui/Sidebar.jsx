import styled from "styled-components";
import { css } from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { largest } from "../utils/media-queries";
// import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  ${largest(css`
    padding: 3.2rem 2.4rem;
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `)}

  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />

      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
