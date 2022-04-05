import { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../assets";
import { Card, Select, Span } from "../../components";
import { enDateToFaDateFull, enDateToWeekDay, toFaNumber } from "../../utils";

const greyishBrown = colors.greyishBrown;
const grey = colors.grey;

const Container = styled.section`
  grid-area: result;
  width: 100%;
  box-sizing: border-box;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Results = ({ data, filters }) => {
  const orderOptions = [
    {
      key: 1,
      value: "price",
      title: "قیمت",
    },
    {
      key: 2,
      value: "time",
      title: "زمان",
    },
  ];

  //states
  const [orderOption, setOrderOption] = useState(orderOptions[0]);
  const [sortedData, setSortedData] = useState(
    sortData(data?.pricedItineraries, orderOptions[0]?.value)
  );

  //const variables
  const originCity = data?.additionalData?.airports[1]?.cityFa;
  const destinationCity = data?.additionalData?.airports[0]?.cityFa;
  const numOfFlights = data?.pricedItineraries?.length;
  const date =
    data?.pricedItineraries[0]?.originDestinationOptions[0]?.flightSegments[0]
      ?.departureDateTime;
  const weekDay = enDateToWeekDay(date);
  const faDateFull = enDateToFaDateFull(date);

  useEffect(() => {
    setSortedData(sortData(data?.pricedItineraries, orderOption?.value));
  }, [orderOption, data?.pricedItineraries]);

  useEffect(() => {
    setSortedData(
      filterData(sortData(data?.pricedItineraries, orderOption?.value), filters)
    );
  }, [filters, orderOption, data?.pricedItineraries]);

  return (
    <Container>
      <Span size="1.25" bold color={greyishBrown}>
        {}بلیط هواپیما {" " + originCity + " "} به {" " + destinationCity + " "}
      </Span>
      <br />
      <TopRow>
        <Span size="0.875" color={greyishBrown}>
          {toFaNumber(numOfFlights)} پرواز یافت شد . {weekDay}،{" "}
          {toFaNumber(faDateFull)}
        </Span>
        <Span direction="rtl" size="0.875" color={grey}>
          {}مرتب سازی:
          <Select
            options={orderOptions}
            // defaultValue={orderOptions[0]}
            value={orderOption}
            onChange={(e) =>
              setOrderOption(
                orderOptions?.filter(
                  (opt) => opt?.title === e?.target?.value
                )[0]
              )
            }
          />
        </Span>
      </TopRow>
      {sortedData?.map((item) => (
        <Card
          key={item?.fareSourceCode}
          data={item}
          additionalData={data?.additionalData}
        />
      ))}
    </Container>
  );
};

const sortData = (data, sortKey) => {
  let sorted = [...data];
  switch (sortKey) {
    case "price":
      sorted = sorted
        .sort(
          (a, b) =>
            new Date(
              a?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime
            ).getTime() >
            new Date(
              b?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime
            ).getTime()
        )
        .sort(
          (a, b) =>
            a?.airItineraryPricingInfo?.itinTotalFare?.totalFare -
            b?.airItineraryPricingInfo?.itinTotalFare?.totalFare
        );
      break;
    case "time":
      sorted = sorted.sort(
        (a, b) =>
          new Date(
            a?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime
          ).getTime() >
          new Date(
            b?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime
          ).getTime()
      );

      break;
    default:
      sorted = sorted
        .sort(
          (a, b) =>
            new Date(
              a?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime
            ).getTime() >
            new Date(
              b?.originDestinationOptions[0]?.flightSegments[0]?.departureDateTime
            ).getTime()
        )
        .sort(
          (a, b) =>
            a?.airItineraryPricingInfo?.itinTotalFare?.totalFare -
            b?.airItineraryPricingInfo?.itinTotalFare?.totalFare
        );
      break;
  }
  return sorted;
};

const filterData = (data, filters) => {
  let filteredStop = [];
  let filteredCabin = [];

  Object.keys(filters)?.forEach((filterKey) => {
    switch (filterKey) {
      case "stop":
        const stopFilters = [...filters?.stop];
        if (!stopFilters?.length) {
          filteredStop = [...data];
          break;
        } else {
          stopFilters?.forEach((filter) => {
            switch (filter) {
              case "noStop":
                filteredStop = [
                  ...filteredStop,
                  ...data.filter(
                    (item) =>
                      item?.originDestinationOptions[0]?.flightSegments[0]
                        ?.stopQuantity === 0
                  ),
                ];
                break;
              case "oneStop":
                filteredStop = [
                  ...filteredStop,
                  ...data.filter(
                    (item) =>
                      item?.originDestinationOptions[0]?.flightSegments[0]
                        ?.stopQuantity === 1
                  ),
                ];
                break;
              case "moreStop":
                filteredStop = [
                  ...filteredStop,
                  ...data.filter(
                    (item) =>
                      item?.originDestinationOptions[0]?.flightSegments[0]
                        ?.stopQuantity >= 2
                  ),
                ];
                break;
              default:
                break;
            }
          });
          break;
        }
      case "cabinClass":
        const cabinClassFilters = [...filters?.cabinClass];
        if (!cabinClassFilters?.length) {
          filteredCabin = [...data];
          break;
        } else {
          cabinClassFilters.forEach((filter) => {
            switch (filter) {
              case "economy":
                filteredCabin = [
                  ...filteredCabin,
                  ...data.filter((item) =>
                    [
                      "B",
                      "O",
                      "Q",
                      "N",
                      "S",
                      "G",
                      "V",
                      "L",
                      "M",
                      "K",
                      "H",
                      "Y",
                      "W",
                      "P",
                    ].includes(
                      String(
                        item?.originDestinationOptions[0]?.flightSegments[0]
                          ?.cabinClassCode
                      ).toUpperCase()
                    )
                  ),
                ];
                break;

              case "business":
                filteredCabin = [
                  ...filteredCabin,
                  ...data.filter((item) =>
                    ["F", "J", "A", "D", "I", "R"].includes(
                      String(
                        item?.originDestinationOptions[0]?.flightSegments[0]
                          ?.cabinClassCode
                      ).toUpperCase()
                    )
                  ),
                ];
                break;
              default:
                break;
            }
          });
        }
        break;
      default:
        break;
    }
  });

  return filteredStop.filter((itemStop) =>
    filteredCabin.some(
      (itemCabin) => itemCabin.fareSourceCode === itemStop.fareSourceCode
    )
  );
};
