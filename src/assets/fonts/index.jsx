import { css } from "styled-components";
import IRANSansWeb from "./IRANSansWeb.woff";
import IRANSans from "./IRANSans.ttf";
import IRANSansBold from "./IRANSansBold.ttf";
import IRANSansBoldWeb from "./IRANSansBoldWeb.woff";

export const fontFaces = css`
  @font-face {
    font-family: IRANSans;
    font-style: normal;
    font-weight: normal;
    src: url(${IRANSansWeb}) format("woff");
    src: url(${IRANSans}) format("truetype");
  }

  @font-face {
    font-family: IRANSansBold;
    font-style: normal;
    font-weight: bold;
    src: url(${IRANSansBoldWeb}) format("woff");
    src: url(${IRANSansBold}) format("truetype");
  }
`;

export default fontFaces;
