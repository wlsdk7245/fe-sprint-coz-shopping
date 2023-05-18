import React from "react";
import styled from "styled-components";
import Toast from "../toast/Toast";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ component }) => {
  return (
    <StyledWrapper>
      <Header />
      <Content>{component}</Content>
      <Footer />
      <Toast />
    </StyledWrapper>
  );
};

export default Layout;

const StyledWrapper = styled.div`
  height: 100%;
`;

const Content = styled.div`
  height: 100%;
  padding: 24px 76px;
`;
