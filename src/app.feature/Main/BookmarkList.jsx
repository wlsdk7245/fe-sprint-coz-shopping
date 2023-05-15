import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardList from "../../app.component/cardList/CardList";

const BookmarkList = () => {
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(true);
  const [bookmarkList, setBookmarkList] = useState([]);

  const requestBookmarkList = () => {
    setIsBookmarkLoading(true);
    const data = localStorage.getItem("coz-shopping");
    setBookmarkList(JSON.parse(data));
    setIsBookmarkLoading(false);
  };

  useEffect(() => {
    requestBookmarkList();
  }, []);

  let bookmarkDataset = bookmarkList;

  const SkeletonArray = Array.from(Array(4).keys());

  if (isBookmarkLoading)
    bookmarkDataset = [...bookmarkDataset, ...SkeletonArray];

  return (
    <StyledWrapper>
      <div className="list-title">북마크 리스트</div>
      <CardList cardList={bookmarkDataset.slice(0, 4)} />
    </StyledWrapper>
  );
};

export default BookmarkList;

const StyledWrapper = styled.div`
  margin-bottom: 12px;

  .list-title {
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 38px;
  }
`;
