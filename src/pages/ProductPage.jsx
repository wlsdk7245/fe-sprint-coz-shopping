import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../app.component/filter/Filter";
import ProductList from "../app.feature/Product/ProductList";

const ProductPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <StyledWrapper>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ProductList selectedFilter={selectedFilter} />
    </StyledWrapper>
  );
};

export default ProductPage;

const StyledWrapper = styled.div``;
