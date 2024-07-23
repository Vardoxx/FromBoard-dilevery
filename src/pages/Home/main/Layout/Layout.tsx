import Header from "../../components/Header/components/main/Header";
import Content from "../../components/Content/main/Content";
import s from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Content />
    </div>
  );
};

export default Layout;
