import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderDropdown from "./HeaderDropdown";

const Header = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleClickDropdown = (open) => () => setIsOpenDropdown(open);

  return (
    <StyledWrapper>
      <HeaderTitle>
        <Link to="/">
          <TitleLogo
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="logo"
          />
        </Link>
        <TitleText>COZ Shopping</TitleText>
      </HeaderTitle>
      <div onMouseLeave={handleClickDropdown(false)}>
        <HeaderMenu
          alt="menu"
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
  z-index: 100;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`;

const TitleLogo = styled.img`
  cursor: pointer;
`;

const TitleText = styled.div`
  color: black;
  font-weight: 700;
  font-size: 32px;
`;

const HeaderMenu = styled.img`
  cursor: pointer;
`;
