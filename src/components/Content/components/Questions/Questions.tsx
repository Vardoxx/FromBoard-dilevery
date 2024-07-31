import Title from "../../../../ui/Title/Title";
import Inputs from "./components/Inputs/Inputs";

import s from "./Questions.module.scss";

const Questions = () => {
  return (
    <section className={s.container}>
      <Title
        firstTitle="Остались вопросы?"
        flexDirection="row"
        textAlign="center"
      />
      <Inputs />
    </section>
  );
};

export default Questions;
