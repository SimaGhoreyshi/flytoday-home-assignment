import styled, { css } from "styled-components";
import { colors } from "../../assets";

const lightGrey = colors.lightGrey;
const grey = colors.grey;
const primary = colors.primary;

const TabsContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  border-bottom: solid 1px ${lightGrey};
`;

const Tab = styled.li`
  height: 2.5rem;
  width: fit-content;
  padding: 0.4rem 0.75rem;
  color: ${grey};
  font-size: 0.875rem;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      border-radius: 4px 4px 0 0;
      background-color: ${primary};
      color: white;
    `};
`;

export const Tabs = ({ tabs, value, onChange }) => {
  return (
    <TabsContainer>
      {tabs?.map((tab) => (
        <Tab key={tab.value} selected={tab?.value === value}>
          {tab.title}
        </Tab>
      ))}
    </TabsContainer>
  );
};
