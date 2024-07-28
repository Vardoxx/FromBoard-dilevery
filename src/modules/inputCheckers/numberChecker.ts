import { ChangeEvent } from "react";

const numberChecker = (
  e: ChangeEvent<HTMLInputElement>,
  placeholder: string,
  setErr: (err: boolean) => void,
  setBlock: (block: boolean) => void
) => {
  const numberOrEmpty = /^\d*$/u;

  if (!numberOrEmpty.test(e.target.value)) {
    setTimeout(() => {
      e.target.value = "";
    }, 300);
    setErr(true);
    setBlock(true);

    e.target.placeholder = "Только числовое значение";

    setTimeout(() => {
      e.target.placeholder = placeholder;
      setBlock(!setBlock);
      setErr(!setErr);
    }, 1500);
  }
};

export default numberChecker;
