import DescriptionAndCalculator from "./components/DescriptionAndCalculator/DescriptionAndCalculator";
import OurAdvantages from "./components/OurAdvantages/OurAdvantages";
import QualityAssurance from "./components/QualityAssurance/QualityAssurance";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import Questions from "./components/Questions/Questions";

import s from "./Content.module.scss";

const Content = () => {
  return (
    <section className={s.content}>
      <DescriptionAndCalculator />
      <OurAdvantages />
      <QualityAssurance />
      <Feedbacks />
      <Questions />
    </section>
  );
};

export default Content;
