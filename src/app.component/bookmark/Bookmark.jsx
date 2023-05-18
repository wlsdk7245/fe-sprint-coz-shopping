import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "../toast/Toast";

const Bookmark = ({ info, isBookmarked }) => {
  const [isSelected, setIsSelected] = useState(isBookmarked);
  const { id } = info;
  const handleClickBookmark = () => {
    try {
      setIsSelected(!isSelected);
      let data = localStorage.getItem("coz-shopping");

      if (isSelected) {
        if (data) {
          data = JSON.parse(data).filter((item) => item.id !== id);
          localStorage.setItem("coz-shopping", JSON.stringify([...data]));
        }
        toast.success(
          <>
            <ToastBookmarkImage
              alt="북마크"
              src={process.env.PUBLIC_URL + `/images/bookmark-off.png`}
            />
            <div>상품이 북마크에서 제거되었습니다.</div>
          </>
        );
      } else {
        if (data)
          localStorage.setItem(
            "coz-shopping",
            JSON.stringify([...JSON.parse(data), info])
          );
        else localStorage.setItem("coz-shopping", JSON.stringify([info]));
        toast.success(
          <>
            <ToastBookmarkImage
              alt="북마크"
              src={process.env.PUBLIC_URL + `/images/bookmark-on.png`}
            />
            <div>상품이 북마크에 추가되었습니다.</div>
          </>
        );
      }
    } catch (err) {
      setIsSelected(!isSelected);
      toast.error("에러가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="bookmark">
      <BookmarkImage
        onClick={handleClickBookmark}
        className="bookmark-button"
        alt="bookmark"
        src={
          process.env.PUBLIC_URL +
          `/images/bookmark-${isSelected ? "on" : "off"}.png`
        }
      />
    </div>
  );
};

export default Bookmark;

const BookmarkImage = styled.img`
  cursor: pointer;
`;

const ToastBookmarkImage = styled.img`
  margin-right: 8px;
  width: 16px;
  height: 16px;
`;
