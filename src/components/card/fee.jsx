import styled from "styled-components";
import { colors } from "../../assets";
import { numberCommaSplitter, toFaNumber } from "../../utils";
import { Button } from "../button";
import { Span } from "../typography";

const grey = colors.grey;
const lightGrey = colors.lightGrey;
const primary = colors.primary;

const FeeContainer = styled.div`
  grid-area: fee;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  border-right: solid 1px ${lightGrey};
  padding: 1rem;
  max-width: 100%;
  box-sizing: border-box;
`;

export const Fee = ({ data }) => {
  return (
    <FeeContainer>
      <Span size="0.75" textAlign="center" color={grey}>
        یک نفر
      </Span>

      <Span bold size="1.25" textAlign="center" color={primary}>
        {toFaNumber(
          numberCommaSplitter(
            Number(data?.airItineraryPricingInfo?.itinTotalFare?.totalFare) / 10
          )
        )}{" "}
        <Span size="0.813" textAlign="center" color={grey}>
          تومان
        </Span>
      </Span>
      <Button type="primary" title="انتخاب بلیط" />
    </FeeContainer>
  );
};
