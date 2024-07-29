import s from "./SubmitBtn.module.scss";

interface BtnProps {
  width: string;
  height: string;
  label: string;
  onClick?: () => void;
}

const SubmitBtn: React.FC<BtnProps> = ({ height, width, label, onClick }) => {
  return (
    <>
      <input
        className={s.btn}
        style={{
          width: width,
          height: height,
        }}
        onClick={onClick}
        type="submit"
        value={label}
      />
    </>
  );
};

export default SubmitBtn;
