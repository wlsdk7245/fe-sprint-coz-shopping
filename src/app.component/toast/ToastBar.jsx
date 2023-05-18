import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { fadeInMove, fadeOutMove } from "../../app.constant/animation";
import { toast } from "./Toast";

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
    <StyledWrapper type={type} opacity={opacity}>
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
  animation: ${({ opacity }) =>
    opacity
      ? css`
          ${fadeInMove} 700ms, ${fadeOutMove} 700ms 3s
        `
      : ""};

  background-color: ${({ type }) =>
    type === "success" ? "var(--color-white)" : "var(--color-error)"};
  color: ${({ type }) =>
    type === "success" ? "var(--color-black)" : "var(--color-white)"};
`;
