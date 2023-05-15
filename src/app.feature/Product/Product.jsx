import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Filter from "../../app.component/filter/Filter";
import ProductList from "../../app.component/productList/ProductList";

const Product = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [target, setTarget] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const requestProductList = async () => {
    setIsLoading(true);
    const result = await axios.get(
      "http://cozshopping.codestates-seb.link/api/v1/products"
    );

    if (result?.status === 200)
      setProductList([...productList, ...result.data]);
    setIsLoading(false);
  };

  useEffect(() => {
    requestProductList();
  }, []);

  useEffect(() => {
    let observer;
    if (target) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await requestProductList();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (selectedFilter === "all") return;
  //   setProductList((prev) => {
  //     return prev.filter((ietm) => ietm.type === selectedFilter);
  //   });
  //   setIsLoading(false);
  // }, [selectedFilter, target]);

  let dataset = productList;
  const SkeletonArray = Array.from(Array(20).keys());

  if (isLoading) dataset = [...dataset, ...SkeletonArray];

  return (
    <StyledWrapper>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <ProductList productList={dataset} />
      {!isLoading && <div className="last-item-flag" ref={setTarget} />}
    </StyledWrapper>
  );
};

export default Product;

const StyledWrapper = styled.div`
  .last-item-flag {
    bottom: 0;
    right: 0;
    width: 0;
    height: 100px;
    background: #000;
  }
`;