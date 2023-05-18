import s from "./products.module.css";
import Card from "../../components/elements/card/card";
import product from "../../products";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import uuid from 'react-uuid';





function Products() {

    console.log(uuid());
   
  const countProducts = useSelector((state) => state.products.count);
  const priceProducts = useSelector((state) => state.products.fullPrice);

  return (
    <div className={s.products}>
        <div className={s.container}>
            <div className={s.header}>
                <h1 className={s.title}>наша продукция</h1>

                <div className={s.gotoBasket}>
                    <div className={s.goods}>
                        <div className={s.basketText}>{countProducts} товара </div>
                        <div className={s.basketText}>на сумму {priceProducts} ₽ </div>
                        
                    </div>
                    <Link to = "/Basket">
                        <img src="/images/Basket.svg" alt="" />
                    </Link>
                    <Link to = "/Login">
                        <button className={s.exit}>Выйти</button>
                    </Link>
                    
                    
                </div>
            </div>
            <div className={s.cards}>
                {product.map(item => {
                    return (
                        
                        <Card

                            key={uuid()}
                            uuid={uuid()}
                            url={item.url}
                            title={item.name}
                            description={item.description}
                            cost={item.price}
                            count={item.weight}
                        />
                    )
                })}
            </div>
            
        </div>

      
    </div>
  );
}

export default Products;
