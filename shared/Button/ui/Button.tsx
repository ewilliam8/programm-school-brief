import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClickFn?: () => void;
  addClass?: string
}

export const Button = ({ children, onClickFn, addClass }: ButtonProps) => {
  return (
    <button
      onClick={() => {
        onClickFn && onClickFn();
      }}
      className={`${styles.Button} ${addClass}`}
    >
      {children}
    </button>
  );
};
