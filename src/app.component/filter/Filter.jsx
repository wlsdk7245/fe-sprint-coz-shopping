import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";

const Filter = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <StyledWrapper>
      <FilterItem
        title="전체"
        src="all"
        selected={selectedFilter === "all"}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterItem
        title="상품"
        src="Product"
        selected={selectedFilter === "Product"}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterItem
        title="카테고리"
        src="Category"
        selected={selectedFilter === "Category"}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterItem
        title="기획전"
        src="Exhibition"
        selected={selectedFilter === "Exhibition"}
        setSelectedFilter={setSelectedFilter}
      />
      <FilterItem
        title="브랜드"
        src="Brand"
        selected={selectedFilter === "Brand"}
        setSelectedFilter={setSelectedFilter}
      />
    </StyledWrapper>
  );
};

export default Filter;

const StyledWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  gap: 36px;
  width: 100%;
  justify-content: center;
`;
