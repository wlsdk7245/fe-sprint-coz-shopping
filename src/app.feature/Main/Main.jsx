import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductList from "../../app.component/productList/ProductList";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [bookmarkList, setBookmarkList] = useState([]);

  const requestProductList = async () => {
    setIsLoading(true);
    const result = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products?count=4"
    );

    if (result?.status === 200) setProductList(result.data);
    setIsLoading(false);
  };

  const requestBookmarkList = () => {
    const data = localStorage.getItem("coz-shopping");
    setBookmarkList(JSON.parse(data));
  };

  useEffect(() => {
    requestProductList();
    requestBookmarkList();
  }, []);

  return (
    <StyledWrapper>
      <div className="product-list-container">
        <div className="list-title">상품 리스트</div>
        <ProductList productList={productList} />
      </div>
      <div className="bookmark-list-container">
        <div className="list-title">북마크 리스트</div>
        <ProductList productList={bookmarkList.slice(0, 4)} />
      </div>
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div`
  .list-title {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
  }

  .product-list-container {
    margin-bottom: 12px;
  }
`;
