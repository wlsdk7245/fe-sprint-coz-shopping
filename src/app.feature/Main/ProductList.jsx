import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardList from "../../app.component/cardList/CardList";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  const requestProductList = async () => {
    setIsLoading(true);
    const result = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
    );

    if (result?.status === 200) setProductList(result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    requestProductList();
  }, []);

  let productDataset = productList;

  const SkeletonArray = Array.from(Array(4).keys());

  if (isLoading) productDataset = [...productDataset, ...SkeletonArray];

  return (
    <StyledWrapper>
      <div className="list-title">상품 리스트</div>
      <CardList cardList={productDataset} />
    </StyledWrapper>
  );
};

export default ProductList;

const StyledWrapper = styled.div`
  margin-bottom: 12px;

  .list-title {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
  }
`;
