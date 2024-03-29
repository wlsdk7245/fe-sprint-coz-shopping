import React from "react";
import styled from "styled-components";
import Toast from "../toast/Toast";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ component }) => {
  return (
    <StyledWrapper>
      <Header />
      <div className="content">{component}</div>
      <Footer />
      <Toast />
    </StyledWrapper>
  );
};

export default Layout;

const StyledWrapper = styled.div`
  height: 100%;
  .content {
    height: 100%;
    padding: 24px 76px;
  }
`;
