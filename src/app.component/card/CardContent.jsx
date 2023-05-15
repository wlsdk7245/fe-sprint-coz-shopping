import React from "react";
import styled, { css } from "styled-components";
import { fadeIn } from "./CardImage";

const CardContent = ({ info, isLoading, setIsLoading }) => {
  const { type } = info;

  if (type === "Product") {
    const { title, price, discountPercentage } = info;
    return (
      <ProductWrapper isLoading={isLoading}>
        <div className="product-detail__title">{title}</div>
        <div className="product-detail__price">
          <div className="product-detail__price-top">{discountPercentage}%</div>
          <div className="product-detail__price-bottom">
            {Number(price).toLocaleString()}
          </div>
        </div>
      </ProductWrapper>
    );
  } else if (type === "Exhibition") {
    const { title, sub_title } = info;
    return (
      <ExhibitionWrapper isLoading={isLoading}>
        <div className="exhibition-detail__title">{title}</div>
        <div className="exhibition-detail__content">{sub_title}</div>
      </ExhibitionWrapper>
    );
  } else if (type === "Brand") {
    const { brand_name, follower } = info;
    return (
      <BrandWrapper isLoading={isLoading}>
        <div className="brand-detail__title">{brand_name}</div>
        <div className="brand-detail__customer">
          <div className="brand-detail__customer-top">관심고객수</div>
          <div className="brand-detail__customer-bottom">
            {follower.toLocaleString()}
          </div>
        </div>
      </BrandWrapper>
    );
  } else if (type === "Category") {
    const { title } = info;
    return (
      <CategoryWrapper isLoading={isLoading}>
        <div className="category-detail__title"># {title}</div>
      </CategoryWrapper>
    );
  } else {
    return <StyledWrapper></StyledWrapper>;
  }
};

export default React.memo(CardContent);

const StyledWrapper = styled.div`
  height: 54px;
`;

const ExhibitionWrapper = styled.div`
  padding-top: 6px;
  line-height: 24px;
  font-size: 16px;

  ${({ isLoading }) => css`
    opacity: 0;
    animation: ${!isLoading ? fadeIn : null} 0.3s forwards;
  `}

  .exhibition-detail__title {
    font-weight: 800;
  }

  .exhibition-detail__content {
  }
`;

const BrandWrapper = styled.div`
  padding-top: 6px;
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  font-size: 16px;

  ${({ isLoading }) => css`
    opacity: 0;
    animation: ${!isLoading ? fadeIn : null} 0.3s forwards;
  `}

  .brand-detail__title {
    font-weight: 800;
  }

  .brand-detail__customer {
    text-align: end;

    .brand-detail__customer-top {
      font-weight: 800;
    }

    .brand-detail__customer-bottom {
      font-weight: 400;
    }
  }
`;

const CategoryWrapper = styled.div`
  padding-top: 6px;
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  font-size: 16px;

  ${({ isLoading }) => css`
    opacity: 0;
    animation: ${!isLoading ? fadeIn : null} 0.3s forwards;
  `}

  .category-detail__title {
    font-weight: 800;
  }
`;

const ProductWrapper = styled.div`
  padding-top: 6px;
  display: flex;
  justify-content: space-between;
  line-height: 24px;
  font-size: 16px;

  ${({ isLoading }) => css`
    opacity: 0;
    animation: ${!isLoading ? fadeIn : null} 0.3s forwards;
  `}

  .product-detail__title {
    font-weight: 800;
  }

  .product-detail__price {
    text-align: end;

    .product-detail__price-top {
      font-weight: 800;
      color: var(--color-violet);
    }

    .product-detail__price-bottom {
      font-weight: 500;
    }
  }
`;
