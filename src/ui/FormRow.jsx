import styled from "styled-components";
import { largest, large, medium } from "../utils/media-queries";
import { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;

  ${largest(css`
    grid-template-columns: 24rem 1fr 1.2fr;
  `)}
  ${large(css`
    grid-template-columns: 24rem 1fr 1.2fr;
  `)}
  ${medium(css`
    grid-template-columns: 24rem 3fr 1.2fr;
  `)}
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

/* eslint react/prop-types: 0 */
function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
