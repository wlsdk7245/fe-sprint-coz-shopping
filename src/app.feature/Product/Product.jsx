import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Filter from "../../app.component/filter/Filter";
import CardList from "../../app.component/cardList/CardList";
import useIntersectionObserver from "../../app.hook/useIntersectionObserver";
import Error from "../../app.component/error/Error";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isError, setIsError] = useState(false);

  const lastCardRef = useRef();

  const requestProductList = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products"
      );

      if (result?.status === 200)
        setProductList([...productList, ...result.data]);
    } catch (err) {
      setIsError(true);
      setProductList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestProductList();
  }, []);

  useIntersectionObserver({
    root: null,
    target: lastCardRef,
    enabled: !isError,
    onIntersect: requestProductList,
  });

  const SkeletonArray = Array.from(Array(20).keys());
  let dataset = productList;
  if (selectedFilter !== "all")
    dataset = dataset.filter((item) => item.type === selectedFilter);
  if (isLoading) dataset = [...dataset, ...SkeletonArray];

  if (isError) return <Error />;
  return (
    <StyledWrapper>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <CardList cardList={dataset} />
      <div className="last-item-flag" ref={lastCardRef} />
    </StyledWrapper>
  );
};

export default Product;

const StyledWrapper = styled.div`
  position: relative;

  .last-item-flag {
    bottom: 0;
    right: 0;
    left: 0;
    height: 100px;
    position: absolute;
  }
`;
