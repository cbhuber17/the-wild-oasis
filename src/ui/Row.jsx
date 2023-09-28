import styled, { css } from "styled-components";
import { gt_smallest, smallest } from "../utils/media-queries";

const Row = styled.div`
  ${gt_smallest(css`
    display: flex;
  `)}

  ${smallest(css`
    text-align: center;
  `)}

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
