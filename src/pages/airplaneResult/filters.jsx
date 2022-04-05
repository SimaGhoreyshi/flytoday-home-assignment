import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { colors } from "../../assets";
import { Anchor, Checkbox, HL, Span } from "../../components";
import { toFaNumber } from "../../utils";

const primary = colors.primary;
const lightGrey = colors.lightGrey;
const greyishBrown = colors.greyishBrown;

const Container = styled.aside`
  grid-area: filters;
  width: 100%;
`;

const ValidationCountdown = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.875rem;
`;

const FilterSectionDropdown = styled.section`
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-areas: "title" "content";
  padding: 1rem;
`;

const FilterSectionContent = styled.section`
  grid-area: content;
  width: 100%;
  background-color: #fff;
  flex-direction: column;
  display: none;
  ${({ collapsed }) =>
    collapsed &&
    css`
      display: ${collapsed && "flex"};
    `}
`;

const FilterButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
`;

export const Filters = ({ filters, setFilters }) => {
  const [stopCollapsed, setStopCollapsed] = useState(false);
  const [classCollapsed, setClassCollapsed] = useState(false);

  const handleFilters = (field, filterClass) => {
    let temp = { ...filters };
    if (temp[filterClass]?.includes(field)) {
      temp = {
        ...temp,
        [filterClass]: temp[filterClass]?.filter((item) => item !== field),
      };
    } else {
      temp[filterClass]?.push(field);
    }
    setFilters(temp);
  };

  const eraseFilters = () => {
    const tempFilters = { ...filters };
    Object.keys(tempFilters).forEach((key) => {
      tempFilters[key].length = 0;
    });
    setFilters(tempFilters);
  };

  return (
    <Container>
      <ValidationCountdown>
        <Span size="0.875" color={greyishBrown}>
          مدت زمان اعتبار نتایج
        </Span>
      </ValidationCountdown>

      <Title>
        <Span size="0.875" color={greyishBrown}>
          فیلترها
        </Span>
        <Anchor size="0.813" color={primary} onClick={eraseFilters}>
          حذف فیلترها
        </Anchor>
      </Title>

      <HL color={lightGrey} />

      <FilterSectionDropdown>
        <FilterButton onClick={() => setStopCollapsed(!stopCollapsed)}>
          <Span bold size="0.875" color={greyishBrown}>
            تعداد توقف
          </Span>
          <i className={`fa fa-angle-${stopCollapsed ? "up" : "down"}`} />
        </FilterButton>
        <br />
        <FilterSectionContent collapsed={stopCollapsed}>
          <Checkbox
            checked={filters?.stop?.includes("noStop")}
            onChange={() => handleFilters("noStop", "stop")}
            title="بدون توقف"
          />
          <Checkbox
            checked={filters?.stop?.includes("oneStop")}
            onChange={() => handleFilters("oneStop", "stop")}
            title="یک توقف"
          />
          <Checkbox
            checked={filters?.stop?.includes("moreStop")}
            onChange={() => handleFilters("moreStop", "stop")}
            title={`بیش از ${toFaNumber(2)} توقف`}
          />
        </FilterSectionContent>
      </FilterSectionDropdown>

      <HL color={lightGrey} />

      <FilterSectionDropdown>
        <FilterButton onClick={() => setClassCollapsed(!classCollapsed)}>
          <Span bold color={greyishBrown}>
            کلاس پروازی
          </Span>
          <i className={`fa fa-angle-${classCollapsed ? "up" : "down"}`} />
        </FilterButton>
        <FilterSectionContent collapsed={classCollapsed}>
          <Checkbox
            checked={filters?.cabinClass?.includes("economy")}
            onChange={() => handleFilters("economy", "cabinClass")}
            title="اکونومی"
          />
          <Checkbox
            checked={filters?.cabinClass?.includes("business")}
            onChange={() => handleFilters("business", "cabinClass")}
            title="بیزینس"
          />
        </FilterSectionContent>
      </FilterSectionDropdown>
    </Container>
  );
};
