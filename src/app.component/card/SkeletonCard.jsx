import React from "react";
import styled from "styled-components";

const SkeletonCard = () => {
  return (
    <StyledWrapper>
      <div className="card-image" />
    </StyledWrapper>
  );
};

export default SkeletonCard;

const StyledWrapper = styled.div`
  position: relative;
  width: 264px;

  .card-image {
    border-radius: 12px;
    width: 264px;
    height: 210px;
    object-fit: cover;
    cursor: pointer;
    background-color: var(--color-black-10);
  }
`;
