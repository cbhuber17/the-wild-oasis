import { css } from "styled-components";

export const size = {
  smallest: "500px",
  small: "768px",
  medium: "1024px",
  large: "1250px",
};

export const gt_smallest = (inner) => css`
  @media (min-width: ${size.smallest}) {
    ${inner};
  }
`;

export const smallest = (inner) => css`
  @media (max-width: ${size.smallest}) {
    ${inner};
  }
`;

export const small = (inner) => css`
  @media (min-width: ${size.smallest}) and (max-width: ${size.small}) {
    ${inner};
  }
`;

export const medium = (inner) => css`
  @media (min-width: ${size.small}) and (max-width: ${size.medium}) {
    ${inner};
  }
`;

export const large = (inner) => css`
  @media (min-width: ${size.medium}) and (max-width: ${size.large}) {
    ${inner};
  }
`;

export const largest = (inner) => css`
  @media (min-width: ${size.large}) {
    ${inner};
  }
`;

export const lt_largest = (inner) => css`
  @media (max-width: ${size.large}) {
    ${inner};
  }
`;
