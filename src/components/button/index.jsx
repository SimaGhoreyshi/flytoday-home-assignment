import styled, { css } from "styled-components";
import { Span } from "..";
import { colors } from "../../assets";

const primary = colors.primary;
const secondary = colors.secondary;
const lightGrey = colors.lightGrey;
const veryDarkGrey = colors.veryDarkGrey;

const ButtonCuntainer = styled.button`
  ${({ type }) =>
    type
      ? css`
          background-color: ${type === "primary" ? primary : secondary};
          border: none;
          &,
          & > * {
            color: white;
          }
        `
      : css`
          &,
          & > * {
            color: ${veryDarkGrey};
          }
          background-color: white;
          border: solid 1px ${lightGrey};
        `};

  margin: 0 6px;
  padding: 0 1rem;
  height: 2.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  border-radius: 4px;
  box-sizing: border-box;
  justify-content: center;

  & > span {
    display: flex;
    align-self: center;

    & > svg {
      margin-left: 4px;
      align-self: center;
    }
  }
`;

export const Button = ({ type, title, icon, onClick }) => {
  return (
    <ButtonCuntainer type={type} onClick={onClick}>
      <Span display="flex" justifyContent="center">
        {icon && <>{icon} </>}
        {title}
      </Span>
    </ButtonCuntainer>
  );
};
