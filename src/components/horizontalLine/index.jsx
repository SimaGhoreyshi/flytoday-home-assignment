import styled, { css } from "styled-components";
import { colors } from "../../assets";

const mildGrey = colors.mildGrey;

export const HL = styled.div`
  height: 1px;
  width: 100%;
  max-width: 6rem;
  box-sizing: border-box;
  ${({ color }) =>
    color &&
    css`
      border-bottom: 1px solid ${color || mildGrey};
    `}
`;
