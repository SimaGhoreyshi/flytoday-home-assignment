import styled from "styled-components";
import { colors } from "../../assets";

const greyishBrown = colors.greyishBrown;
const lightGrey = colors.lightGrey;

const CustomSelect = styled.select`
  background-color: white;
  color: ${greyishBrown};
  border-radius: 4px;
  border: solid 1px ${lightGrey};
  height: 2.5rem;
  width: 10rem;
  margin-right: 0.875rem;
  padding: 0 0.5rem;
`;

const CustomOption = styled.option``;

export const Select = ({ options, defaultValue, value, onChange }) => {
  return (
    <CustomSelect
      // defaultValue={defaultValue?.title}
      value={value?.title}
      onChange={onChange}
    >
      {options?.map((option) => (
        <CustomOption key={option?.key}>{option?.title}</CustomOption>
      ))}
    </CustomSelect>
  );
};
