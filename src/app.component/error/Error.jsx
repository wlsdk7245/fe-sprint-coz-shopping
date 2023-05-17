import React from "react";
import styled from "styled-components";

const Error = ({
  innerText = "에러가 발생했습니다. 잠시후에 다시 시도해주세요.",
  height = "600px",
}) => {
  return <StyledWrapper style={{ height }}>{innerText}</StyledWrapper>;
};

export default Error;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
