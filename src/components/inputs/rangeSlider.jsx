import styled from "styled-components";

const CustomRange = styled.input``;

export const RangeSlider = ({ value, onChange, min, max }) => {
  return (
    <CustomRange
      dataRole="doubleslider"
      type="range"
      value={value}
      onChange={onChange}
      min={min}
      max={max}
    ></CustomRange>
  );
};
