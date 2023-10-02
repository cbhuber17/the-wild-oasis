import styled from "styled-components";
import { largest, large } from "../utils/media-queries";
import { css } from "styled-components";

const TableOperations = styled.div`
  ${largest(css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
  `)}
  ${large(css`
    display: flex;
    align-items: center;
    gap: 1.6rem;
  `)}
`;

export default TableOperations;
