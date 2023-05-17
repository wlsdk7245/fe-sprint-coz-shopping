import React from "react";
import styled from "styled-components";

const NoneCardList = ({ innerText = "데이터가 없습니다!" }) => {
  return <StyledWrapper>{innerText}</StyledWrapper>;
};

export default NoneCardList;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 264px;
`;
