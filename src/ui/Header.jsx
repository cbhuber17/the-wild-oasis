import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "./../features/authentication/UserAvatar";
import { smallest, gt_smallest } from "../utils/media-queries";
import { css } from "styled-components";

const StyledHeader = styled.header`
  ${gt_smallest(css`
    padding: 1.2rem 4.8rem;
  `)}
  ${smallest(css`
    padding: 1.2rem 0.5rem;
  `)}


  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
