import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderDropdown = ({ isOpenDropdown, onClickDropdown }) => {
  const navigate = useNavigate();

  const handleClickLink = (link) => () => {
    onClickDropdown();
    navigate(link);
  };

  return (
    <StyledWrapper isOpenDropdown={isOpenDropdown}>
      <DropDownItem className="dropdown-list__item center">
        OOO님, 안녕하세요!
      </DropDownItem>
      <DropDownItem
        className="dropdown-list__item link"
        onClick={handleClickLink("/products/list")}
      >
        <img
          alt="상품 리스트"
          src={process.env.PUBLIC_URL + "/images/product.png"}
        />
        상품리스트 페이지
      </DropDownItem>
      <DropDownItem
        className="dropdown-list__item link"
        onClick={handleClickLink("/bookmark")}
      >
        <img
          alt="북마크"
          src={process.env.PUBLIC_URL + "/images/bookmark.png"}
        />
        북마크 페이지
      </DropDownItem>
    </StyledWrapper>
  );
};

export default HeaderDropdown;

const StyledWrapper = styled.div`
  opacity: ${({ isOpenDropdown }) => (isOpenDropdown ? 1 : 0)};
  position: absolute;
  top: 70px;
  right: 32px;
  filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.1));
  text-align: center;
  transition: 300ms;
  z-index: 999;
  pointer-events: ${({ isOpenDropdown }) =>
    isOpenDropdown ? "default" : "none"};

  &::before {
    content: "";
    position: absolute;
    top: -18px;
    right: 54px;
    border-bottom: 18px solid var(--color-white);
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
  }
`;

const DropDownItem = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  padding: 13px 24px;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);

  &.center {
    justify-content: center;
  }

  &.link {
    cursor: pointer;
  }

  img {
    margin-right: 8px;
  }
`;
