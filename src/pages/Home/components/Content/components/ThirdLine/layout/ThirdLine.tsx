import { useContext } from "react";
import Sertificates from "../components/Sertificates/Sertificates";
import Title from "../components/Title/Title";
import s from "./ThirdLine.module.scss";
import { TargetContext } from "../../../../../../../context/target";

const ThirdLine = () => {
  const contextValue = useContext(TargetContext);

  if (!contextValue) {
    throw new Error("Aboba");
  }

  const { targetGarant } = contextValue;
  return (
    <section ref={targetGarant} className={s.third_line}>
      <Title />
      <Sertificates />
    </section>
  );
};

export default ThirdLine;
