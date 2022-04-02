import styled from "styled-components";
import { Span } from "../../components";

export const SearchBoxContainer = styled.div`
  grid-area: searchBox;
  width: 100%;
  height: 8rem;
  position: fixed;
  background-color: white;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  z-index: 90;
  & > span {
    display: flex;
    place-content: center;
  }
`;

export const SearchBox = () => {
  return (
    <SearchBoxContainer>
      <Span>باکس جستجو</Span>
    </SearchBoxContainer>
  );
};
