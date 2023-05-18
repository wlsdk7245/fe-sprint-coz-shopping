import React from "react";
import styled, { css } from "styled-components";
import { fadeIn } from "./CardImage";

const CARD_TYPE = {
  PRODUCT: "Product",
  EXHIBITION: "Exhibition",
  BRAND: "Brand",
  CATEGORY: "Category",
};

const CardContent = ({ info, isLoading }) => {
  const {
    type,
    title,
    price,
    discountPercentage,
    sub_title,
    brand_name,
    follower,
  } = info;

  const getCardContent = (type) => {
    let titleLeft = "",
      titleRight = "",
      detail = "",
      className = "default";

    if (type === CARD_TYPE.PRODUCT) {
      titleLeft = title;
      titleRight = `${discountPercentage}%`;
      detail = `${Number(price).toLocaleString()}원`;
      className = "product";
    } else if (type === CARD_TYPE.EXHIBITION) {
      titleLeft = title;
      detail = sub_title;
      className = "exhibition";
    } else if (type === CARD_TYPE.BRAND) {
      titleLeft = brand_name;
      titleRight = "관심고객수";
      detail = follower.toLocaleString();
      className = "brand";
    } else if (type === CARD_TYPE.CATEGORY) {
      titleLeft = `# ${title}`;
      className = "category";
    }

    return {
      titleLeft,
      titleRight,
      detail,
      className,
    };
  };

  const { titleLeft, titleRight, detail, className } = getCardContent(type);

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
