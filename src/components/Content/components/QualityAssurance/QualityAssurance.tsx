import { useContext } from "react";
import { TargetContext } from "../../../../context/targetContext";
import Sertificates from "./components/Sertificates/Sertificates";

import s from "./QualityAssurance.module.scss";
import Title from "../../../../ui/Title/Title";

const QualityAssurance = () => {
  const contextValue = useContext(TargetContext);

  if (!contextValue) {
    throw new Error("Aboba");
  }

  const { targetGarant } = contextValue;
  return (
    <section ref={targetGarant} className={s.third_line}>
      <Title
        firstTitle="Гарантии качества"
        secondTitle=" Наши гарантии качества включают в себя полный спектр документов,
        необходимых для ввоза и вывоза товаров, a также для успешного бизнеса на
        мировом рынке. Мы предоставляем вам надёжность и уверенность"
        flexDirection="column"
        textAlign="center"
      />
      <Sertificates />
    </section>
  );
};

export default QualityAssurance;
