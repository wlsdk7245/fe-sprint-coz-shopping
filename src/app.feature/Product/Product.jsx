import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Filter from "../../app.component/filter/Filter";
import CardList from "../../app.component/cardList/CardList";

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
      observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  let dataset = productList;
  if (selectedFilter !== "all")
    dataset = dataset.filter((item) => item.type === selectedFilter);

  return (
    <StyledWrapper>
      <Filter
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <CardList cardList={dataset} />
      {!isLoading && <div className="last-item-flag" ref={setTarget} />}
      {isLoading && <CardList cardList={Array.from(Array(20).keys)} />}
    </StyledWrapper>
  );
};

export default Product;

const StyledWrapper = styled.div`
  position: relative;
  .last-item-flag {
    bottom: 0;
    position: absolute;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100px;
  }
`;
