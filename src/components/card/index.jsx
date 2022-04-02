import styled from "styled-components";
import { colors } from "../../assets";
import { Detail } from "./detail";
import { Fee } from "./fee";
import { Gist } from "./gist";

const lightGrey = colors.lightGrey;

const CardContainer = styled.div`
  width: 100%;
  /* max-width: 55.8rem; */
  /* height: 11.56rem; */
  /* height: fit-content; */
  background: white;
  margin-top: 1rem;
  direction: rtl;
  display: grid; //detail , gist , fee
  grid-template-columns: 73% 27%;
  grid-template-rows: 78% 22%;
  grid-template-areas:
    "gist fee"
    "detail detail";

  & > * {
    width: 100%;
  }
  //mobile
  @media screen and (max-width: 480px) {
  }

  //tablets
  @media screen and (max-width: 768px) {
  }
`;

export const Card = ({ data, additionalData }) => {
  return (
    <CardContainer>
      <Fee data={data}></Fee>
      <Gist additionalData={additionalData} data={data}></Gist>
      <Detail data={data}></Detail>
    </CardContainer>
  );
};
