import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { fadeIn } from "../../app.constant/animation";
import Bookmark from "../bookmark/Bookmark";
import Modal from "../modal/Modal";
import { getCardImageContent } from "../../app.constant/cardConstant";

const CardImage = ({ info, isLoading, setIsLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { id } = info;

  const { title, image } = getCardImageContent(info);

  const handleOpenModal = () => setIsOpenModal(!isOpenModal);

  const handleClickBookmark = () => {
    setIsBookmarked(!isBookmarked);
    let data = localStorage.getItem("coz-shopping");

    if (isBookmarked) {
      if (data) {
        data = JSON.parse(data).filter((item) => item.id !== id);
        localStorage.setItem("coz-shopping", JSON.stringify([...data]));
      }
    } else {
      if (data)
        localStorage.setItem(
          "coz-shopping",
          JSON.stringify([...JSON.parse(data), info])
        );
      else localStorage.setItem("coz-shopping", JSON.stringify([info]));
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("coz-shopping");
    if (data) {
      if (JSON.parse(data).some((item) => item.id === id)) {
        setIsBookmarked(true);
      }
    }
  }, []);

  return (
    <StyledWrapper isLoaded={!isLoading}>
      <Modal
        title={title}
        isOpen={isOpenModal}
        onOpenModal={handleOpenModal}
        backgroundImage={image}
        isBookmarked={isBookmarked}
        onClickBookmark={handleClickBookmark}
      />
      <CardBackground />
      <CardImg
        src={image}
        loading="lazy"
        alt=""
        isLoaded={!isLoading}
        onLoad={() => setIsLoading(false)}
        onClick={handleOpenModal}
      />
      <Bookmark
        isBookmarked={isBookmarked}
        onClickBookmark={handleClickBookmark}
      />
    </StyledWrapper>
  );
};

export default CardImage;

const StyledWrapper = styled.div`
  position: relative;
  width: 264px;
  height: 210px;

  .bookmark {
    position: absolute;
    bottom: 12px;
    right: 12px;
    opacity: 1;
    z-index: 3;
    ${({ isLoaded }) => css`
      opacity: 0;
      animation: ${isLoaded ? fadeIn : null} 0.5s forwards;
    `}
  }
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-gray-10);
  border-radius: 12px;
  z-index: 2;
`;

const CardImg = styled.img`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 300ms;
  border-radius: 12px;
  object-fit: cover;
  overflow: hidden;
  opacity: 1;
  cursor: pointer;

  ${({ isLoaded }) => css`
    opacity: 0;
    animation: ${isLoaded ? fadeIn : null} 0.5s forwards;
  `}
`;
