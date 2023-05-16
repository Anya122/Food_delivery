import s from './card.module.css'


function Card({url, title = 'Дефолтный заголовок', description, cost = "2700", count = "500г."}) {
  return (
    <div className={s.card}>
      <img src={url} alt="" className={s.cardPreview} />

      <h2 className={s.title}>{title}</h2>

      <p className={s.cardDescription}>
        {description}
      </p>

      <div className={s.cardBottom}>
        <div className={s.cost}>{cost}₽ <span className={s.count}>/ {count}</span></div>

        <svg className={s.plus} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5" stroke="white"/>
            <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      
    </div>
  );
}

export default Card;