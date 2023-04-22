import style from './NFTCard.module.css';
import Image from 'next/image';
import ETH from '../assets/ETH.png';

const NFTCard = ({ user, image }) => {
  return (
    <div className={style.NFTCardContainer}>
      <div className={style.NFTImageContainer}>
        <Image width={193} src={image} alt='NFT' height={193} />
        <p className={style.NFTTime}>3 Months</p>
      </div>
      <h1 className={style.NFTCardName}> {user}</h1>
      <div className={style.NFTCardDet}>
        <div className={style.NFTCardNameAndPrice}>
          <p className={style.NFTCardStatus}>Bought</p>
          <span style={{ display: 'flex', gap: '8px' }}>
            <p className={style.NFTCardPrice}>1.82 </p>
            <Image height={12} src={ETH} alt='eth' />
          </span>
        </div>
        <div className={style.NFTCardNameAndPrice}>
          <p className={style.HighlighCardTime}>Floor</p>
          <span style={{ display: 'flex', gap: '8px' }}>
            <p className={style.NFTCardPrice}>02.82</p>
            <Image height={12} src={ETH} alt='eth' />
            <p className={style.HighlighCardXP}>+21.6%</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
