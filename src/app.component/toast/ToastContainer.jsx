import React from "react";
import { createPortal } from "react-dom";

const ToastContainer = ({ children }) => {
  return createPortal(<>{children}</>, document.getElementById("toast"));
};

export default ToastContainer;
