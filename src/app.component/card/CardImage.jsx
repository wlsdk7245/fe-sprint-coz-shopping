import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bookmark from "../bookmark/Bookmark";
import Modal from "../modal/Modal";

const CardImage = ({ info }) => {
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
    <StyledWrapper>
      <Modal
        title={title}
        isOpen={isOpenModal}
        onOpenModal={handleOpenModal}
        backgroundImage={image}
        isBookmarked={isBookmarked}
        onClickBookmark={handleClickBookmark}
      />
      <img
        src={image}
        alt="card"
        className="card-image"
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

  .openModal {
    display: flex;
  }

  .card-image {
    border-radius: 12px;
    width: 264px;
    height: 210px;
    object-fit: cover;
    cursor: pointer;
  }

  .bookmark {
    position: absolute;
    bottom: 12px;
    right: 12px;
  }
`;
