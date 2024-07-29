import s from "./Author.module.scss";
import { FaGithub } from "react-icons/fa";
const Author = () => {
  return (
    <div className={s.container}>
      <div>Вёрстку и функционал разрабатывал:</div>
      <a href="https://github.com/Vardoxx" target="_blank">
        Vardoxx <FaGithub />
      </a>
    </div>
  );
};

export default Author;
