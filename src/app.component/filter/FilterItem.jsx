import React from "react";
import styled from "styled-components";

const FilterItem = ({ title, src, selected, setSelectedFilter }) => {
  const handleClick = () => {
    setSelectedFilter(src);
  };

  return (
    <StyledWrapper onClick={handleClick}>
      <FilterImage
        alt="filter-img"
        src={process.env.PUBLIC_URL + `/images/category/${src}.png`}
      />
      <FilterTitle
        className={`filter-title ${
          selected ? "selected-true" : "selected-false"
        }`}
      >
        {title}
      </FilterTitle>
    </StyledWrapper>
  );
};

export default FilterItem;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 300ms;

  &:hover {
    opacity: 0.8;
  }
`;

const FilterImage = styled.img`
  width: 82px;
  height: 82px;
  margin-bottom: 6px;
`;

const FilterTitle = styled.div`
  font-size: 16px;
  transition: 300ms;
  border-bottom: 3px solid transparent;

  &.selected-true {
    font-weight: 700;
    border-bottom: 3px solid var(--color-violet);
    color: var(--color-violet);
  }
`;
