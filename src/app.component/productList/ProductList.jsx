import React from "react";
import styled from "styled-components";
import Card from "../card/Card";
import SkeletonCard from "../card/SkeletonCard";

const ProductList = ({ productList }) => {
  return (
    <StyledWrapper>
      {productList.map((product) => {
        const { id } = product;
        if (id === undefined) return <SkeletonCard />;
        else
          return (
            <Card key={`${Date.now()}-${Math.random()}-${id}`} info={product} />
          );
      })}
    </StyledWrapper>
  );
};

export default ProductList;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 12px;
`;
