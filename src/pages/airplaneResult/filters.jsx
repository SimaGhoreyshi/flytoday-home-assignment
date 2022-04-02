import { useEffect, useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

import { colors } from "../../assets";
import { Anchor, Checkbox, HL, RangeSlider, Span } from "../../components";
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
        <Anchor size="0.813" color={primary} onClick={() => setFilters([])}>
          حذف فیلترها
        </Anchor>
      </Title>

      <HL color={lightGrey} />

      <FilterSectionDropdown>
        <FilterButton onClick={() => setStopCollapsed(!stopCollapsed)}>
          <Span bold size="0.875" color={greyishBrown}>
            تعداد توقف
          </Span>
          <i class={`fa fa-angle-${stopCollapsed ? "up" : "down"}`} />
        </FilterButton>
        <br />
        <FilterSectionContent collapsed={stopCollapsed}>
          <Checkbox title="بدون توقف" />
          <Checkbox title="یک توقف" />
          <Checkbox title={`بیش از ${toFaNumber(2)} توقف`} />
        </FilterSectionContent>
      </FilterSectionDropdown>

      <HL color={lightGrey} />

      <FilterSectionDropdown>
        <FilterButton onClick={() => setClassCollapsed(!classCollapsed)}>
          <Span bold color={greyishBrown}>
            کلاس پروازی
          </Span>
          <i class={`fa fa-angle-${classCollapsed ? "up" : "down"}`} />
        </FilterButton>
        <FilterSectionContent collapsed={classCollapsed}>
          <Checkbox title="اکونومی" />
          <Checkbox title="بیزینس" />
        </FilterSectionContent>
      </FilterSectionDropdown>
    </Container>
  );
};
