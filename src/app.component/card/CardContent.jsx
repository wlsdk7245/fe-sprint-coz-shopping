import React from "react";
import styled, { css } from "styled-components";
import { fadeIn } from "../../app.constant/animation";
import { getCardContent } from "./cardConstant";

const CardContent = ({ info, isLoading }) => {
  const { titleLeft, titleRight, detail, className } = getCardContent(info);

  return (
    <StyledWrapper isLoading={isLoading}>
      <CardTitle>
        <CardTitleContent className={`title-content ${className}--left`}>
          {titleLeft}
        </CardTitleContent>
        <CardTitleContent className={`title-content ${className}--right`}>
          {titleRight}
        </CardTitleContent>
      </CardTitle>
      <CardSubTitle className={`sub-title ${className}`}>{detail}</CardSubTitle>
    </StyledWrapper>
  );
};

export default React.memo(CardContent);

const StyledWrapper = styled.div`
  min-height: 54px;
  padding-top: 6px;
  line-height: 24px;
  font-size: 16px;

  ${({ isLoading }) => css`
    opacity: 0;
    animation: ${!isLoading ? fadeIn : null} 0.3s forwards;
  `}
`;

const CardTitle = styled.div`
  font-weight: 800;
  display: flex;
  justify-content: space-between;
`;

const CardTitleContent = styled.div`
  &.product--right {
    color: var(--color-violet);
  }
`;

const CardSubTitle = styled.div`
  &.brand,
  &.product {
    text-align: right;
    font-weight: 400;
  }
`;
