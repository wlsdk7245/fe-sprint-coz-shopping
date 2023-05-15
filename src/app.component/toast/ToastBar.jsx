import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { toast } from "./Toast";

const fadein = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`;
const fadeout = keyframes`
  0% { top: -30px; opacity: 1; } 
  100% { top: 0px; opacity: 0; }
`;

const ToastBar = ({ toastItem }) => {
  const { id, type, message } = toastItem;

  let toastDuration = 3000;
  const ANIMATION_DURATION = 350;

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);

    const timeoutForRemove = setTimeout(() => {
      toast.removeToastItem(id);
    }, toastDuration);

    const timeoutForOpacity = setTimeout(() => {
      setOpacity(0);
    }, toastDuration - ANIMATION_DURATION);

    return () => {
      clearTimeout(timeoutForRemove);
      clearTimeout(timeoutForOpacity);
    };
  }, [toastItem, toastDuration]);

  return (
    <StyledWrapper opacity={opacity}>
      <img
        alt="북마크"
        src={
          process.env.PUBLIC_URL +
          `/images/bookmark-${type === "add" ? "on" : "off"}.png`
        }
      />
      {message}
    </StyledWrapper>
  );
};

export default ToastBar;

const StyledWrapper = styled.div`
  opacity: ${({ opacity }) => opacity};
  transition: 500ms;
  padding: 18px 24px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  z-index: 9999;
  background-color: var(--color-white);
  animation: ${({ opacity }) =>
    opacity
      ? css`
          ${fadein} 700ms, ${fadeout} 700ms 3s
        `
      : ""};

  img {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
`;
