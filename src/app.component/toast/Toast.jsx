import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ToastBar from "./ToastBar";
import ToastContainer from "./ToastContainer";
import { Toaster } from "./toaster";

export let toast = new Toaster(null);

const Toast = () => {
  const [toastItems, setToastItems] = useState([]);

  useEffect(() => {
    toast = new Toaster(setToastItems);
  }, []);

  return (
    <ToastContainer>
      <StyledWrapper>
        {toastItems.map((toastItem) => (
          <ToastBar key={toastItem.id} toastItem={toastItem} />
        ))}
      </StyledWrapper>
    </ToastContainer>
  );
};

export default Toast;

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 12px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 999;
  align-items: end;
`;
