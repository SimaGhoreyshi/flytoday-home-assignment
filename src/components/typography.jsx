import styled, { css } from "styled-components";
import { fontFaces } from "./../assets";

export const Text = css`
  ${fontFaces}
  font-family: IRANSans;
  letter-spacing: normal;
  font-stretch: normal;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};

  ${({ maxWidth }) =>
    maxWidth &&
    css`
      max-width: ${maxWidth};
    `};

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};

  ${({ maxHeight }) =>
    maxHeight &&
    css`
      max-height: ${maxHeight};
    `};

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

  ${({ cursor }) =>
    cursor &&
    css`
      cursor: ${cursor};
    `};

  ${({ overflow }) =>
    overflow &&
    css`
      overflow: ${overflow};
    `};

  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `};

  ${({ borderRadius }) =>
    borderRadius &&
    css`
      border-radius: ${borderRadius}rem;
    `};

  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
      font-family: IRANSansBold;
    `};

  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `};

  ${({ display }) =>
    display &&
    css`
      display: ${display};
    `};

  ${({ direction }) =>
    direction &&
    css`
      direction: ${direction};
    `};

  ${({ justifySelf }) =>
    justifySelf &&
    css`
      justify-self: ${justifySelf};
    `};

  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `};

  ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `};
`;

export const Span = styled.span`
  ${Text}
`;

export const Paragraph = styled.p`
  ${Text}
`;

export const Ul = styled.ul`
  ${Text}
`;

export const Li = styled.li`
  ${Text}
`;
