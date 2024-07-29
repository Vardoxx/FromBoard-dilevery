import s from "./Title.module.scss";

type FlexDirection = "row" | "column";
type TextAlign = "center" | "left" | "justify" | "right";

interface TitleProps {
  firstTitle: string;
  secondTitle?: string;
  flexDirection?: FlexDirection;
  textAlign?: TextAlign;
}

const Title: React.FC<TitleProps> = ({
  firstTitle,
  secondTitle,
  flexDirection,
  textAlign,
}) => {
  return (
    <div
      className={s.title_container}
      style={{
        display: "flex",
        flexDirection: flexDirection,
        textAlign: textAlign,
      }}
    >
      <div>{firstTitle}</div>
      <div className={s.second_title}>{secondTitle}</div>
    </div>
  );
};

export default Title;
