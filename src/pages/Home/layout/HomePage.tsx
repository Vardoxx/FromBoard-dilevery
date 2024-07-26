import Header from "../components/Header/layout/Header";
import Content from "../components/Content/layout/Content";
import Footer from "../components/Footer/layout/Footer";
import { TargetContext } from "../../../context/target";
import { RefObject, useRef } from "react";
import s from "./HomePage.module.scss";

const HomePage = () => {
  const targetCalculator: RefObject<HTMLElement> = useRef(null);
  const targetGarant: RefObject<HTMLElement> = useRef(null);
  const targetFeedback: RefObject<HTMLElement> = useRef(null);

  const targetCalculatorHanndleClick = () => {
    targetCalculator.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const targetGarantHanndleClick = () => {
    targetGarant.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const targetFeedbackHanndleClick = () => {
    targetFeedback.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <div className={s.layout}>
      <TargetContext.Provider
        value={{
          targetCalculator,
          targetCalculatorHanndleClick,
          targetGarant,
          targetGarantHanndleClick,
          targetFeedback,
          targetFeedbackHanndleClick,
        }}
      >
        <Header />
        <Content />
        <Footer />
      </TargetContext.Provider>
    </div>
  );
};

export default HomePage;
