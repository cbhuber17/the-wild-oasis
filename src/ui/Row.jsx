import styled, { css } from "styled-components";
import {
  gt_smallest,
  smallest,
  small,
  medium,
  large,
  largest,
} from "../utils/media-queries";

export const Row = styled.div`
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

export const Row2 = styled.div`
  ${largest(css`
    display: flex;
  `)}
  ${large(css`
    display: flex;
  `)}
  ${medium(css`
    text-align: center;
  `)}
  ${small(css`
    text-align: center;
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

Row2.defaultProps = {
  type: "vertical",
};

// export default Row;
