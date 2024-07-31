import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import { TargetProvider } from "../../context/targetContext";
import s from "./HomePage.module.scss";
import { FormContext } from "../../context/formContext";

const HomePage = () => {
  return (
    <div className={s.layout}>
      <TargetProvider>
        <FormContext>
          <Header />
          <Content />
          <Footer />
        </FormContext>
      </TargetProvider>
    </div>
  );
};

export default HomePage;
