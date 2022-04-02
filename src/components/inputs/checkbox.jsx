import styled from "styled-components";
import { colors } from "../../assets";
import { Span } from "../typography";

const greyishBrown = colors.greyishBrown;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 1rem;
  margin: 0.5rem 0;
`;

const CustomCheckbox = styled.input`
  width: 1rem;
  height: 1rem;
  border: none;
  display: flex;
  margin-left: 1rem;
`;

export const Checkbox = ({ checked, onChange, title }) => {
  return (
    <Container>
      <CustomCheckbox type="checkbox" checked={checked} onChange={onChange} />
      <Span size="0.875" color={greyishBrown}>
        {title}
      </Span>
    </Container>
  );
};
