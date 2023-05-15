import React from "react";
import styled from "styled-components";
import ProductList from "./ProductList";
import BookmarkList from "./BookmarkList";

const Main = () => {
  return (
    <StyledWrapper>
      <ProductList />
      <BookmarkList />
    </StyledWrapper>
  );
};

export default Main;

const StyledWrapper = styled.div``;
