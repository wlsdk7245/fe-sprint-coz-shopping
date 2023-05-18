import React from "react";
import styled from "styled-components";
import Bookmark from "../bookmark/Bookmark";
import ModalContainer from "./ModalContainer";

const Modal = ({
  info,
  title,
  isOpen,
  onOpenModal,
  backgroundImage,
  isBookmarked,
}) => {
  return isOpen ? (
    <ModalContainer>
      <StyledWrapper onClick={onOpenModal}>
        <ModalWrapper onClick={(event) => event.stopPropagation()}>
          <BackgroundImage src={backgroundImage} alt="modal-background" />
          <CloseButton
            src={process.env.PUBLIC_URL + "/images/close-button.png"}
            alt="close-button"
            onClick={onOpenModal}
          />
          <ModalTitle>
            <Bookmark info={info} isBookmarked={isBookmarked} />
            <ModalTitleText>{title}</ModalTitleText>
          </ModalTitle>
        </ModalWrapper>
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
`;

const ModalWrapper = styled.div`
  position: relative;
  filter: drop-shadow(0px 0px 36px rgba(0, 0, 0, 0.5));
`;

const BackgroundImage = styled.img`
  border-radius: 12px;
  overflow: hidden;
  width: 744px;
  height: 480px;
  object-fit: cover;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
`;

const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 24px;
  left: 24px;
`;

const ModalTitleText = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-white);
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  margin-left: 8px;
`;
