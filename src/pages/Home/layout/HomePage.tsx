import Header from "../components/Header/layout/Header";
import Content from "../components/Content/layout/Content";
import Footer from "../components/Footer/layout/Footer";
import s from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePage;
