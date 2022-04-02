import styled from "styled-components";
import { sampleData } from "../../assets";
import { Filters } from "./filters";
import { Results } from "./results";
import { SearchBox } from "./searchBox";

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* grid-template-areas:
    "searchBox"
    "content"; */
`;

const Content = styled.section`
  width: 90%;
  max-width: 75rem;
  box-sizing: border-box;
  direction: rtl;
  display: grid;
  grid-template-areas: "filters result";
  grid-template-columns: 23% 77%;
  grid-gap: 1%;
  //space to top as much as the height of the header
  margin: 8rem auto 0;
  padding-top: 2rem;
`;

export const AirplaneResult = () => {
  return (
    <PageContainer className="page">
      <SearchBox />
      <Content>
        <Filters />
        <Results data={sampleData}></Results>
      </Content>
    </PageContainer>
  );
};
