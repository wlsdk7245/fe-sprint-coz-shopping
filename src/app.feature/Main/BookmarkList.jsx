import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CardList from "../../app.component/cardList/CardList";
import Error from "../../app.component/error/Error";

const BookmarkList = () => {
  const [isBookmarkLoading, setIsBookmarkLoading] = useState(true);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [isError, setIsError] = useState(false);

  let localDataset = localStorage.getItem("coz-shopping");
  localDataset = JSON.parse(localDataset) ?? [];

  const requestBookmarkList = () => {
    try {
      setIsBookmarkLoading(true);
      if (localDataset) {
        setBookmarkList(localDataset);
      } else {
        setBookmarkList([]);
      }
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsBookmarkLoading(false);
    }
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
      {isError && (
        <Error
          innerText="북마크 리스트를 불러오는 데 실패했습니다. 다시 시도해주세요."
          height="264px"
        />
      )}
      {!isError && <CardList cardList={bookmarkDataset.slice(0, 4)} />}
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
