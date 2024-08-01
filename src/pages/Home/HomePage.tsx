import Header from "../../modules/Header/Header";
import Content from "../../modules/Content/Content";
import Footer from "../../modules/Footer/Footer";
import { TargetProvider } from "../../context/targetContext";
import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={s.layout}>
      <TargetProvider>
        <Header />
        <Content />
        <Footer />
      </TargetProvider>
    </div>
  );
};

export default HomePage;
