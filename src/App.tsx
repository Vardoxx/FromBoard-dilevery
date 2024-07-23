import "./App.css";
import logo from "./logo.png";
import contentFirstLineImg from "./content-first-line-img.png";

const App = () => {
  return (
    <div className="layout">
      <div className="header">
        <div className="container">
          <div className="first-header-line">
            <div className="header-logo">
              <img src={logo} alt="logo" />
              <div className="logo-name">FromBoard Delivery</div>
            </div>
            <div className="first-header-line-description">
              <div className="first-header-line-txt">
                Доставляем товары из заграницы в Россию
                <br />
                Стоимость от 550 рублей за заказ
                <br />1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽
              </div>
              <div className="first-header-line-number">
                <span>{"+7 (800) 123 45-67"}</span>
                <br />
                Звонки по России бесплатны
              </div>
            </div>
          </div>
          <div className="second-header-line">
            <div className="second-header-line-active-container">
              <a className="second-header-line-active" href="@">
                Кальякулятор
              </a>
              <a className="second-header-line-active" href="@">
                О нас
              </a>
              <a className="second-header-line-active" href="@">
                Гарантии
              </a>
              <a className="second-header-line-active" href="@">
                Отзывы
              </a>
            </div>
            <div className="second-header-line-btn-container">
              <a className="second-header-line-btn" href="@">
                Оставить Заявку
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="content-first-line">
          <div className="content-first-line-description-container">
            <div className="content-first-line-description-txt">
              <span>
                Без проблемная доставка купленных вещей из США, Европы и Азии в
                Россию
              </span>
              Сэкономьте на покупках и наслаждайтесь мировыми брендами — наш
              сервис позволяет вам легко и удобно заказывать товары co всего
              мира и получать их в России
            </div>
            <img src={contentFirstLineImg} alt="content-first-line-img" />
          </div>
          <div className="content-first-line-calculator-container">
            <div className="content-first-line-calculator-txt">
              <span>Калькулятор доставки</span> Посчитайте, сколько будет стоить
              перевозка покупки из зарубежа
            </div>
            <div className="content-first-line-input-container">
              <div className="title-input">
                <input type="name" placeholder="Имя" />
              </div>
              <div className="grid-inputs">
                <input type="email" placeholder="Почта" />
                <input type="tel" placeholder="Телефон" />
                <input type="number" placeholder="Общая площадь, м²" />
                <input type="number" placeholder="Вес, кг" />
                <input type="text" placeholder="Страна покупки" />
                <input type="text" placeholder="Город покупки" />
                <input type="text" placeholder="Область доставки" />
                <input type="text" placeholder="Город доставки" />
              </div>
              <div className="bottom-btn">
                <a className="content-first-line-input-container-btn" href="@">
                  Оставить Заявку
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
