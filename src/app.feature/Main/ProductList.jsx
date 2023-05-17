import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardList from "../../app.component/cardList/CardList";
import Error from "../../app.component/error/Error";

const ProductList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [isError, setIsError] = useState(false);

  const requestProductList = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
      );
      if (result?.status === 200) setProductList(result.data);
      else throw result;
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
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
      {isError && (
        <Error
          innerText="상품 리스트를 불러오는 데 실패했습니다. 다시 시도해주세요."
          height="264px"
        />
      )}
      {!isError && <CardList cardList={productDataset} />}
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
