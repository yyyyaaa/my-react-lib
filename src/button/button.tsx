"use client";
import * as React from "react";
import { buttonStyle } from "./button.css";

export interface ButtonProps {
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  const buttonRef = React.useRef(null);

  return (
    <button className={buttonStyle} ref={buttonRef}>
      {props.children}
    </button>
  );
}
