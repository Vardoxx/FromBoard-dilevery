import { ChangeEvent } from "react";

const textChecker = (
  e: ChangeEvent<HTMLInputElement>,
  placeholder: string,
  setErr: (err: boolean) => void,
  setBlock: (block: boolean) => void
) => {
  const stringOrEmpty = /^[\sА-яа-яёЁ\sA-Za-z\s]*$/u;

  if (!stringOrEmpty.test(e.target.value)) {
    setTimeout(() => {
      e.target.value = "";
    }, 300);
    setErr(true);
    setBlock(true);

    e.target.placeholder = "Только текстовое значение";

    setTimeout(() => {
      e.target.placeholder = placeholder;
      setBlock(!setBlock);
      setErr(!setErr);
    }, 1500);
  }
};

export default textChecker;
