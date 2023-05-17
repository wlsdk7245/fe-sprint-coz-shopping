import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Bookmark from "../bookmark/Bookmark";
import Modal from "../modal/Modal";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const CardImage = ({ info, isLoading, setIsLoading }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const { id } = info;

  const getCardInfo = (info) => {
    const { type } = info;
    let image, title;
    if (type === "Brand") {
      title = info.brand_name;
      image = info.brand_image_url;
    } else if (type === "Category") {
      title = `# ${info.title}`;
      image = info.image_url;
    } else {
      title = info.title;
      image = info.image_url;
    }
    return { title, image };
  };

  const { title, image } = getCardInfo(info);

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
      <div className="card-background" />
      <img
        src={image}
        loading="lazy"
        alt=""
        onLoad={() => setIsLoading(false)}
        className={`card-image`}
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

  .card-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-gray-10);
    border-radius: 12px;
    z-index: 2;
  }

  .openModal {
    display: flex;
  }

  .card-image {
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
  }

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
