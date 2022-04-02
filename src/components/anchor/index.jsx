import styled, { css } from "styled-components";
import { fontFaces } from "../../assets";

export const Anchor = styled.a`
  ${fontFaces}
  font-family: IRANSans;
  letter-spacing: normal;
  font-stretch: normal;

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `};

  ${({ size }) =>
    size &&
    css`
      font-size: ${size}rem;
    `};

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};

  ${({ lineHeight }) =>
    lineHeight &&
    css`
      line-height: ${lineHeight};
    `};

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `};

  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ textAlign = "right" }) =>
    textAlign &&
    css`
      text-align: ${textAlign};
    `};

  ${({ cursor = "pointer" }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};

  ${({ textDecoration = "none" }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-family: IRANSansBold;
    `};
`;
