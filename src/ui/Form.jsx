import styled, { css } from "styled-components";
import {
  largest,
  large,
  medium,
  small,
  smallest,
} from "../utils/media-queries";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      ${largest(css`
        width: 80rem;
      `)}
      ${large(css`
        width: 80rem;
      `)}
      ${medium(css`
        width: 60rem;
      `)}
      ${small(css`
        max-height: 80vh;
        width: 40rem;
        overflow-y: auto;
      `)}
      ${smallest(css`
        max-height: 80vh;
        width: 28rem;
        overflow-y: auto;
      `)}
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
