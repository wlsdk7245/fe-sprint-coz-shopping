import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardList from "../../app.component/cardList/CardList";
import NoneCardList from "../../app.component/cardList/NoneCardList";
import Filter from "../../app.component/filter/Filter";

const Bookmark = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [localDataset, setLocalDataset] = useState([]);
  const [target, setTarget] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [page, setPage] = useState(0);

  const requestProductList = async () => {
    setIsLoading(true);
    let result = localStorage.getItem("coz-shopping");
    if (result) setLocalDataset([...JSON.parse(result)]);
    setIsLoading(false);
  };

  const requestBookmarkList = () => {
    setBookmarkList([
      ...bookmarkList,
      ...localDataset.slice(page * 20, page * 20 + 20),
    ]);
  };

  useEffect(() => {
    requestProductList();
  }, []);

  useEffect(() => {
    let observer;
    if (target && localDataset.length >= page * 20) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);

          await requestBookmarkList();
          setPage(page + 1);
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 0.1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [localDataset, page, target]);

  let dataset = bookmarkList;
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
    </StyledWrapper>
  );
};

export default Bookmark;

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
