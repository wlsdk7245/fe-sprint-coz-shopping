import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledWrapper>
      <div className="footer-text">개인정보 처리방침 | 이용 약관</div>
      <div className="footer-text">All rights reserved @ Codestates</div>
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

  .footer-text {
    color: var(--color-gray);
    font-weight: 400;
    font-size: 12px;
  }
`;
