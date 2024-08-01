import { text } from "./components/text";
import s from "./components/AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={s.description_container}>
      <div>
        {text[1]}
        <br />
        <br />
        {text[2]}
        <br />
        <br />
        {text[3]}
        <br />
        <br />
        {text[4]}
        <br />
        <br />
        {text[5]}
      </div>
    </div>
  );
};

export default AboutUs;
