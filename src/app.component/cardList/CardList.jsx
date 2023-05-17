import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import NoneCardList from "./NoneCardList";

const CardList = ({ cardList }) => {
  if (!cardList.length) return <NoneCardList />;
  return (
    <StyledWrapper>
      {cardList.map((product) => {
        const { id } = product;
        return (
          <Card
            key={`${Date.now()}-${Math.random()}-${id}`}
            id={id}
            info={product}
          />
        );
      })}
    </StyledWrapper>
  );
};

export default CardList;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 12px;
  min-height: 264px;
`;
