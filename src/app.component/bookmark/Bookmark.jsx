import React from "react";
import styled from "styled-components";
import { toast } from "../toast/Toast";

const Bookmark = ({ isBookmarked, onClickBookmark }) => {
  const handleClickBookmark = () => {
    if (isBookmarked) {
      toast.delete("상품이 북마크에서 제거되었습니다.");
    } else {
      toast.add("상품이 북마크에 추가되었습니다.");
    }
    onClickBookmark();
  };

  return (
    <StyledWrapper className="bookmark">
      <img
        onClick={handleClickBookmark}
        className="bookmark-button"
        alt="bookmark"
        src={
          process.env.PUBLIC_URL +
          `/images/bookmark-${isBookmarked ? "on" : "off"}.png`
        }
      />
    </StyledWrapper>
  );
};

export default Bookmark;

const StyledWrapper = styled.div`
  .bookmark-button {
    cursor: pointer;
  }
`;
