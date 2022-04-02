import styled from "styled-components";
import { colors } from "../../assets";
import { HL } from "../horizontalLine";

const secondary = colors.secondary;
const primary = colors.primary;
const mildGrey = colors.mildGrey;

const DurationShapeContainer = styled.span`
  display: inline-flex;
  flex-direction: row;
  width: 8rem;
  align-items: center;
  justify-content: center;
`;

const Origin = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${primary};
`;

const Destination = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border-radius: 50%;
  border: 1px solid ${secondary};
`;

export const DurationShape = () => {
  return (
    <DurationShapeContainer>
      <Origin />
      <HL color={mildGrey} />
      <Destination />
    </DurationShapeContainer>
  );
};
