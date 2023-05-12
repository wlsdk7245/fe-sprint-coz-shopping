import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleClickDropdown = (open) => () => setIsOpenDropdown(open);

  return (
    <StyledWrapper>
      <div className="header-title">
        <Link to="/">
          <img
            className="title-logo"
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="logo"
          />
        </Link>
        <div className="title-text">COZ Shopping</div>
      </div>
      <div onMouseLeave={handleClickDropdown(false)}>
        <img
          alt="menu"
          className="header-menu"
          onClick={handleClickDropdown(true)}
          src={process.env.PUBLIC_URL + "/images/menu.png"}
        />
        <HeaderDropdown
          isOpenDropdown={isOpenDropdown}
          onClickDropdown={handleClickDropdown(false)}
        />
      </div>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  height: 80px;
  width: 100%;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  padding: 0 76px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: var(--color-white);
  z-index: 2;

  .header-title {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;

    .title-logo {
      cursor: pointer;
    }

    .title-text {
      color: black;
      font-weight: 700;
      font-size: 32px;
    }
  }

  .header-menu {
    cursor: pointer;
  }
`;
