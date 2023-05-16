import s from "./products.module.css";
import Card from "../../components/elements/card/card";

import products from "../../products";

// деструктуризация - присванивание, синтаксис js, который позваляет красивее и удобнее распаковывать 
// объекты, массивы в несколько переменных одновременно
function Products() {
    let arr = ['Данные 1', 'Данные 2']
    let [item1,item2] = arr

    // let item1 = arr[0]
    console.log('item1: ', item1);
    // let item2 = arr[1]
    console.log('item1: ', item2);



  return (
    <div className={s.products}>
        <div className={s.container}>
            <div className={s.header}>
                <h1 className={s.title}>наша продукция</h1>
                <div className={s.gotoBasket}>
                    <div className={s.basketText}>3 товара <br/> на сумму 3 500 ₽</div>
                    <img src="/images/Basket.svg" alt="" />
                </div>
            </div>
            <div className={s.cards}>
                {products.map(item => {
                    return (
                        <Card
                            key={item.id}
                            url={item.url}
                            title={item.name}
                            description={item.description}
                            cost={item.price}
                            count={item.weight}
                        />
                    )
                })}
            {/* <Card
                url="/images/1.png"
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            />
            <Card
                url="/images/2.png"
                title="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых "
                cost = "1600"
                count="750г."
            />
            <Card
                url="/images/3.png"
                title="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                cost = "1820"
                count="7шт."
            />
            <Card
                url="/images/1.png"
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            />
            <Card
                url="/images/1.png"
                title="Устрицы по рокфеллеровски"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры "
            />
            <Card
                url="/images/2.png"
                title="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых "
            />
             <Card
                url="/images/3.png"
                title="Креветки по-королевски в лимонном соке"
                description="Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу"
                cost = "1820"
                count="7шт."
            />
            <Card
                url="/images/1.png"
                title="Свиные ребрышки на гриле с зеленью"
                description="Не следует, однако забывать, что реализация намеченных плановых "
            /> */}
            </div>
            
        </div>

      
    </div>
  );
}

export default Products;
