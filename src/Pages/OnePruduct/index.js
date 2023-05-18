import s from "./OneProduct.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearProduct } from "../../store/reducers/products";
import { addBasket } from "../../store/reducers/products";
import uuid from 'react-uuid';

function OneProduct() {
  const oneProducts = useSelector((state) => state.products.product);
  const countProducts = useSelector((state) => state.products.count);
  const priceProducts = useSelector((state) => state.products.fullPrice);
  const dispatch = useDispatch();
  return (
    <div className={s.Product}>
      <header className={s.header}>
        <Link to="/Products">
          <img
            src="/images/arrow.svg"
            alt=""
            onClick={() => {
              dispatch(clearProduct());
            }}
          />
        </Link>
        <div className={s.gotoBasket}>
          <div className={s.goods}>
            <div className={s.basketText}> {countProducts} товара </div>
            <div className={s.basketText}> на сумму {priceProducts}₽ </div>
          </div>
          <Link to="/Basket">
            <img src="/images/Basket.svg" alt="" />
          </Link>
          <Link to = "/Login">
                        <button className={s.exit}>Выйти</button>
            </Link>
        </div>
      </header>
      <div className={s.container}>
        {oneProducts.map((item) => {
            const title = item.title
            const url = item.url
            const cost = item.cost
            
          return (
            <div className={s.card}>
              <img src={item.url} alt="" className={s.cardPreview} />
              <div className={s.cardRight}>
                <h2 className={s.titleCard}>{item.title}</h2>

                <div className={s.cardRight}>
                  <p className={s.cardDesc}>
                    Не следует, однако забывать, что консультация с широким
                    активом представляет собой интересный эксперимент проверки
                    новых предложений. Не следует, однако забывать, что
                    сложившаяся структура организации позволяет оценить значение
                    новых предложений. Разнообразный и богатый опыт начало
                    повседневной работы по формированию позиции требуют от нас
                    анализа позиций.Не следует, однако забывать, что
                    консультация с широким активом представляет собой интересный
                    эксперимент проверки новых предложений. Не следует, однако
                    забывать, что сложившаяся структура организации позволяет
                    оценить значение новых предложений.
                  </p>

                  <div className={s.btns}>
                    <div className={s.cost}>
                        {item.cost}₽ / <span className={s.count}>{item.count}</span>  
                    </div>
                    <button className={s.btn}
                        onClick = {() => {
                            dispatch(addBasket({
                                url,
                                title,
                                cost,
                                uuid: uuid()
                              
                            }));
                          }}>В корзину</button>
                  </div>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OneProduct;
