import styled from "styled-components";

import { smallest, gt_smallest } from "../../utils/media-queries";
import { css } from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  ${gt_smallest(css`
    padding: 3.2rem;
  `)}

  ${smallest(css`
    padding: 0.5rem;
    h2 {
      text-align: center;
    }
  `)}

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

export default DashboardBox;
