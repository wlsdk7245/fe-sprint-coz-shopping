import React, { useState } from "react";
import styled from "styled-components";
import CardContent from "./CardContent";
import CardImage from "./CardImage";

const Card = ({ info }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <StyledWrapper>
      <CardImage
        info={info}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <CardContent info={info} isLoading={isLoading} />
    </StyledWrapper>
  );
};

export default React.memo(Card, (prev, next) => {
  return prev.id === next.id;
});

const StyledWrapper = styled.div`
  width: 264px;
  margin: 0 auto;
`;
