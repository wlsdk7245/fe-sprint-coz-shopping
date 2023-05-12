import React from "react";
import styled from "styled-components";
import CardContent from "./CardContent";
import CardImage from "./CardImage";

const Card = ({ info }) => {
  return (
    <StyledWrapper>
      <CardImage info={info} />
      <CardContent info={info} />
    </StyledWrapper>
  );
};

export default Card;

const StyledWrapper = styled.div`
`;
