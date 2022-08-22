import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  children?: ReactNode;
  before?: ReactNode;
  after?: ReactNode; 
}

export default function Button({ children, before, after }: ButtonProps) {
  const classes = `
    flex p-3
    text-white uppercase
    bg-indigo-500
    hover:bg-indigo-600
    active:bg-indigo-700
    focus:outline-none focus:ring focus:ring-blue-300
`;

  return (
    <button
      data-testid="button"
      className={styles.button}
    >
      <span>
        {before}
      </span>
      
      <span>
        {children}
      </span>

      <span>{after}</span>
    </button>
  );
}