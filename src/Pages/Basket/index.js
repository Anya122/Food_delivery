import s from "./basket.module.css"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {removeBasket} from "../../store/reducers/products";
import {clearProduct} from "../../store/reducers/products";

function Basket({url, title, cost}) {

    const basketProducts = useSelector((state) => state.products.basket);
    const priceProducts = useSelector((state) => state.products.fullPrice);
    const dispatch = useDispatch();

    return(
        <div className={s.basket}>
            <header className={s.header}>
                    <Link to = "/Products">
                        <img 
                            onClick={() => {
                                dispatch(clearProduct());
                              }}src="/images/arrow.svg" alt="" />
                    </Link>
                    <h1 className={s.title}>Корзина с выбранными товарами</h1>
                    <Link to = "/Login">
                        <button className={s.exit}>Выйти</button>
                    </Link>
                </header>
            <div className={s.container}>
                

                <ul className={s.cadrs}>
                    {basketProducts.map((item,index) => {
                        return(
                        <li key ={index} className={s.card}>
                            <img src={item.url} alt="" className={s.cardPreview} />

                            <h2 className={s.titleCard}>{item.title}</h2>

      
                            <div className={s.cardRight}>
                                <div className={s.cost}>{item.cost}₽</div>
                                <img className = {s.cross} onClick = {() => {
                                    dispatch(removeBasket(item.uuid));
                                }}src="/images/cross.svg" alt="" />
                            </div>

                        </li>
                        )
                    })}
                    
                </ul>
                
            </div>

            <div className={s.footer}>
                <div className={s.containerFoot}>
                    <div className={s.footCost}>
                        <div className={s.footTitle}>Заказ на сумму:</div>
                        <div className={s.cost}>{priceProducts}₽</div>
                    </div>

                    <a href = "https://dostavka.yandex.ru/"><button className={s.btn}> Оформить заказ</button></a>
                    
                </div>
            </div>
        </div>
    )
}

export default Basket;