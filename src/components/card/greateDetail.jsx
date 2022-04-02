import styled, { css } from "styled-components";
import { Tabs, Span } from "..";
import { colors } from "../../assets";
import { AirplaneIcon, RulesIcon } from "./../../assets";

const grey = colors.grey;

const GreateDetailContainer = styled.div`
  grid-area: greateDetail;
  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      display: none;
    `};
  margin-top: 2rem;
`;

export const GreateDetail = ({ isCollapsed }) => {
  const tabs = [
    {
      title: (
        <Span alignItems="baseline" display="inline-flex">
          <Span margin="0 0 0 0.5rem">
            <AirplaneIcon />
          </Span>
          <Span size="0.875">جزئیات پرواز</Span>
        </Span>
      ),
      value: 0,
    },
    {
      title: (
        <Span alignItems="baseline" display="inline-flex">
          <Span margin="0 0 0 0.5rem">
            <RulesIcon fill={grey} />
          </Span>
          <Span size="0.875">قوانین و شرایط</Span>
        </Span>
      ),
      value: 1,
    },
  ];
  return (
    <GreateDetailContainer isCollapsed={isCollapsed}>
      <Tabs tabs={tabs} value={0} />
      
    </GreateDetailContainer>
  );
};
