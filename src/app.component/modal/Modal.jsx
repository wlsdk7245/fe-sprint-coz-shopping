import React from "react";
import styled from "styled-components";
import Bookmark from "../bookmark/Bookmark";
import ModalContainer from "./ModalContainer";

const Modal = ({
  title,
  isOpen,
  onOpenModal,
  backgroundImage,
  isBookmarked,
  onClickBookmark,
}) => {
  return isOpen ? (
    <ModalContainer>
      <StyledWrapper onClick={onOpenModal}>
        <div
          className="modal-wrapper"
          onClick={(event) => event.stopPropagation()}
        >
          <img
            className="background-image"
            src={backgroundImage}
            alt="modal-background"
          />
          <img
            className="close-button"
            src={process.env.PUBLIC_URL + "/images/close-button.png"}
            alt="close-button"
            onClick={onOpenModal}
          />
          <div className="modal-title">
            <Bookmark
              isBookmarked={isBookmarked}
              onClickBookmark={onClickBookmark}
            />
            <div className="modal-title__text">{title}</div>
          </div>
        </div>
      </StyledWrapper>
    </ModalContainer>
  ) : (
    <></>
  );
};

export default Modal;

const StyledWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-wrapper {
    position: relative;
    filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5));

    .background-image {
      border-radius: 12px;
      overflow: hidden;
      width: 744px;
      height: 480px;
      object-fit: cover;
    }

    .close-button {
      position: absolute;
      top: 24px;
      right: 24px;
      cursor: pointer;
      text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    }

    .modal-title {
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 24px;
      left: 24px;

      img {
        margin-right: 8px;
      }

      .modal-title__text {
        font-size: 24px;
        font-weight: 700;
        color: var(--color-white);
        text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
