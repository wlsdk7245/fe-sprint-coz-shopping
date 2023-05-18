import { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const fadeInMove = keyframes`
  0% { top: 0px; opacity: 0; } 
  100% { top: -30px; opacity: 1; }
`;

export const fadeOutMove = keyframes`
  0% { top: -30px; opacity: 1; } 
  100% { top: 0px; opacity: 0; }
`;
