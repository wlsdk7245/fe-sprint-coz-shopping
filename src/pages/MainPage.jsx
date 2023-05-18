import React from "react";
import styled from "styled-components";
import MainProductList from "../app.feature/Main/MainProductList";
import MainBookmarkList from "../app.feature/Main/MainBookmarkList";

const MainPage = () => {
  return (
    <StyledWrapper>
      <MainProductList />
      <MainBookmarkList />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div``;
