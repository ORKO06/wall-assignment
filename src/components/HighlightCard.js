import style from './HighlightCard.module.css';
import Image from 'next/image';
import ETH from '../assets/ETH.png';


const HighlightCard = ({ name, status, user, image, color }) => {
  return (
    <div className={style.HighlightCardContainer}>
      <div data-color={color} className={style.backgroundCircle}></div>
      <div className={style.HighlightCardDetails}>
        <div className={style.HighlighCardImageAndNameContainer}>
          <Image width={52} height={52} alt='avatar' src={image} />
          <div>
            <p className={style.HighlightCardName}>{name}</p>
            <p className={style.HighlightCardStatus} style={{ color: color }}>
              {status}
            </p>
          </div>
        </div>
        <div className={style.HighlightCardDet}>
          <div className={style.HighlightCardNameAndPrice}>
            <p className={style.HighlightCardName}>{user}</p>
            <p className={style.HighlightCardPrice}>1.82 
            <Image height={12} src={ETH} alt='eth' />
            </p>
          </div>
          <div className={style.HighlightCardNameAndPrice}>
            <p className={style.HighlightCardTime}>2 months ago</p>
            <p className={style.HighlightCardXP}>+200XP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
