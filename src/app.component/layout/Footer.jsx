import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledWrapper>
      <FooterText>개인정보 처리방침 | 이용 약관</FooterText>
      <FooterText>All rights reserved @ Codestates</FooterText>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FooterText = styled.div`
  color: var(--color-gray);
  font-weight: 400;
  font-size: 12px;
`;
