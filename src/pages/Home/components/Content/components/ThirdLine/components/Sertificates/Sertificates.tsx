import s from "./Sertificates.module.scss";
import firstSertificateIMG from "./img/firstSertificateIMG.png";
import secondSertificateIMG from "./img/secondSertificateIMG.png";
import thirdSertificateIMG from "./img/thirdSertificateIMG.png";
import fourSertificateIMG from "./img/fourSertificateIMG.png";

const Sertificates = () => {
  return (
    <div>
      <div className={s.certificate_container}>
        <div>
          <img src={firstSertificateIMG} alt="" />
          <div>Свидетельство o регистрации в РФ</div>
        </div>

        <div>
          <img src={secondSertificateIMG} alt="" />
          <div>Свидетельство o регистрации в США</div>
        </div>

        <div>
          <img src={thirdSertificateIMG} alt="" />
          <div>Свидетельство o регистрации в Китае</div>
        </div>

        <div>
          <img src={fourSertificateIMG} alt="" />
          <div>Свидетельство o регистрации в Великобритнии</div>
        </div>
      </div>
    </div>
  );
};

export default Sertificates;
