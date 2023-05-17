import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import CardList from "../../app.component/cardList/CardList";
import Error from "../../app.component/error/Error";
import Filter from "../../app.component/filter/Filter";
import useIntersectionObserver from "../../app.hook/useIntersectionObserver";

const Bookmark = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [isError, setIsError] = useState(false);

  const lastCardRef = useRef();
  let localDataset = localStorage.getItem("coz-shopping");
  if (localDataset) localDataset = JSON.parse(localDataset);

  const requestBookmarkList = async () => {
    try {
      setIsLoading(true);
      if (localDataset) {
        await setBookmarkList([
          ...bookmarkList,
          ...localDataset.slice(page * 20, page * 20 + 20),
        ]);
        setPage(page + 1);
      } else {
        setBookmarkList([]);
      }
    } catch (err) {
      console.log(err);
      setIsError(true);
      setBookmarkList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    requestBookmarkList();
  }, []);

  useIntersectionObserver({
    root: null,
    target: lastCardRef,
    enabled: localDataset && localDataset.length >= page * 20,
    onIntersect: requestBookmarkList,
  });

  const SkeletonArray = Array.from(Array(20).keys());

  let dataset = bookmarkList;
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
      <CardList cardList={dataset} isLoading={isLoading} />
      <div className="last-item-flag" ref={lastCardRef} />
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
