import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { css } from "styled-components";
import {
  largest,
  large,
  medium,
  small,
  smallest,
} from "../utils/media-queries";

const StyledAppLayout = styled.div`
  ${largest(css`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
  `)};
`;

const Main = styled.main`
  background-color: var(--color-grey-50);

  ${largest(css`
    padding: 4rem 4.8rem 6.4rem;
    overflow-y: scroll;
  `)}

  ${large(css`
    min-height: 85vh;
    padding: 4rem 4.8rem 6.4rem;
    overflow-y: hidden;
  `)}
    
  ${medium(css`
    min-height: 85vh;
    padding: 2rem 2.4rem 3.2rem;
    overflow-y: hidden;
  `)}

  ${small(css`
    min-height: 91vh;
    padding: 1rem 1.2rem 1.6rem;
    overflow-y: hidden;
  `)}

  ${smallest(css`
    min-height: 91vh;
    padding: 0.5rem 0.6rem 0.8rem;
    overflow-y: hidden;
  `)}

  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  overflow-x: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
