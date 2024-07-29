import { IoMdClose } from "react-icons/io";
import { mainColors } from "../../helpers/MainColors/MainColors";
import { text } from "./ui/text";
import s from "./AboutUs.module.scss";

interface ApplicationFormProps {
  onClose: () => void;
}

const AboutUs: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  return (
    <>
      <div
        style={{ backgroundColor: mainColors.white }}
        className={s.container}
      >
        <div className={s.closeIcon} onClick={handleCloseClick}>
          <IoMdClose />
        </div>
        <div className={s.title_container}>
          <div>{text[0]}</div>
        </div>
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
      </div>
    </>
  );
};

export default AboutUs;
