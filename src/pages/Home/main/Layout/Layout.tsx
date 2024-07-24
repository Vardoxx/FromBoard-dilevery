import Header from "../../components/Header/layout/Header";
import Content from "../../components/Content/layout/Content";
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
