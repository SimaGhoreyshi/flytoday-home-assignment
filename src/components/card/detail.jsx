import { useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { colors } from "../../assets";
import { toFaNumber } from "../../utils";
import { Anchor, Tabs, Span } from "../";
import { GreateDetail } from "./greateDetail";

const lightGrey = colors.lightGrey;
const secondary = colors.secondary;
const detailInfo = colors.detailInfo;
const greyishBrown = colors.greyishBrown;

const DetailContainer = styled.div`
  grid-area: detail;
  display: grid;
  direction: rtl;
  padding: 0 1rem;
  border-top: solid 1px ${lightGrey};
  grid-template-columns: 73% 27%;
  min-height: 2.5rem;
  grid-template-areas: "info left";

  ${({ isCollapsed }) =>
    isCollapsed &&
    css`
      min-height: 27.5rem;
      grid-template-rows: 2.5rem auto;
      grid-template-areas: "info left" "greateDetail greateDetail";
    `};
`;

const Left = styled.div`
  grid-area: left;
  display: flex;
  place-self: center;
  & > a > i {
    margin: 0 0.3rem;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  grid-area: info;
  & > * {
    margin: 0 0.4rem;
  }
  & :first-child {
    margin: 0 0 0 0.5rem;
  }
`;

export const Detail = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const obj = data?.originDestinationOptions[0]?.flightSegments[0];
  useEffect(() => {
    console.log(isCollapsed);
  }, [isCollapsed]);
  return (
    <DetailContainer isCollapsed={isCollapsed}>
      <Left onClick={() => setIsCollapsed(!isCollapsed)}>
        <Anchor
          color={secondary}
          size="0.75"
          display="flex"
          alignItems="center"
        >
          جزئیات بیشتر
          <i
            className={"fa fa-caret-" + (isCollapsed ? "up" : "down")}
            aria-hidden="true"
          ></i>
        </Anchor>
      </Left>
      <Info>
        <Span
          backgroundColor={detailInfo}
          color={greyishBrown}
          size="0.75"
          height="60%"
          padding="0 0.875rem"
        >
          چارتر
        </Span>
        <Span color={greyishBrown} size="0.75">
          اکونومی
        </Span>
        <Span color={greyishBrown} size="0.75">
          .
        </Span>
        <Span color={greyishBrown} size="0.75">
          {toFaNumber(obj?.seatsRemaining)} صندلی خالی
        </Span>
        <Span color={greyishBrown} size="0.75">
          .
        </Span>
        <Span color={greyishBrown} size="0.75">
          شماره پرواز : {obj?.flightNumber}
        </Span>
        <Span color={greyishBrown} size="0.75">
          .
        </Span>
        <Span color={greyishBrown} size="0.75">
          تامین‌کننده: پرایس لاین
          {/* couldn't find the supplier in the sample data  */}
        </Span>
      </Info>
      <GreateDetail isCollapsed={isCollapsed}>
        <Tabs />
      </GreateDetail>
    </DetailContainer>
  );
};
