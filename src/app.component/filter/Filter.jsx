import React from "react";
import styled from "styled-components";
import FilterItem from "./FilterItem";

const FILTER_CONTENT = [
  { title: "전체", src: "all" },
  { title: "상품", src: "Product" },
  { title: "카테고리", src: "Category" },
  { title: "기획전", src: "Exhibition" },
  { title: "브랜드", src: "Brand" },
];

const Filter = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <StyledWrapper>
      {FILTER_CONTENT.map(({ title, src }) => (
        <FilterItem
          key={`filter-${src}`}
          title={title}
          src={src}
          selected={selectedFilter === src}
          setSelectedFilter={setSelectedFilter}
        />
      ))}
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
