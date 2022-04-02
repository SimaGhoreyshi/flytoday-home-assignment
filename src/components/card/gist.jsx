import styled from "styled-components";
import { colors } from "../../assets";
import taban from "../../assets/airlineLogos/taban.png";
import { DurationShape } from "./duratuinShape";
import { enDateToTime, getDurationStr, toFaNumber } from "../../utils";
import { Span } from "../typography";

const grey = colors.grey;
const red = colors.red;
const greyishBrown = colors.greyishBrown;
const darkGrey = colors.darkGrey;

const GistContainer = styled.div`
  grid-area: gist;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const AirLineLogo = styled.img`
  min-height: 4rem;
  max-height: 40%;
  margin-left: 1rem;
`;

const AirlineLogoName = styled.div`
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TimeAndPlace = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > span > .stop-quantity {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const DestinationDutation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gist = ({ data, additionalData }) => {
  const obj = data?.originDestinationOptions[0]?.flightSegments[0];
  return (
    <GistContainer>
      <AirlineLogoName>
        <AirLineLogo
          alt="taban "
          src={
            taban
            /* it's hard coded because I didn't have 
          the time to select src programmatically */
          }
        />
        <Span size="0.875" color={greyishBrown}>
          {
            additionalData?.airlines?.filter(
              (airline) => airline?.iata === data?.validatingAirlineCode
            )[0]?.nameFa
          }
        </Span>
      </AirlineLogoName>

      {/* origin */}
      <TimeAndPlace>
        <Span bold size="1.5" color={greyishBrown}>
          {toFaNumber(enDateToTime(obj?.departureDateTime))}
        </Span>
        <Span size=".875" color={greyishBrown}>
          {
            additionalData?.airports?.filter(
              (airport) => airport?.iata === obj?.departureAirportLocationCode
            )[0]?.cityFa
          }
          <Span size=".75" color={grey}>
            ({obj?.departureAirportLocationCode})
          </Span>
        </Span>
      </TimeAndPlace>
      <DestinationDutation>
        <Span size="0.75" color={darkGrey} textAlign="center">
          {getDurationStr(obj?.journeyDuration)}
        </Span>
        <DurationShape />
      </DestinationDutation>

      {/* destination */}
      <TimeAndPlace>
        <Span direction="ltr">
          <Span
            direction="ltr"
            color={red}
            size="0.813"
            className="stop-quantity"
          >
            {"+" + toFaNumber(obj?.stopQuantity) + " "}
          </Span>
          <Span direction="ltr" bold size="1.5" color={greyishBrown}>
            {toFaNumber(enDateToTime(obj?.arrivalDateTime))}
          </Span>
        </Span>
        <Span size=".875" color={greyishBrown}>
          {
            additionalData?.airports?.filter(
              (airport) => airport?.iata === obj?.arrivalAirportLocationCode
            )[0]?.cityFa
          }
          <Span size=".75" color={grey}>
            ({obj?.arrivalAirportLocationCode})
          </Span>
        </Span>
      </TimeAndPlace>
    </GistContainer>
  );
};
