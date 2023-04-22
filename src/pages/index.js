import style from '../../styles/Index.module.css';
import { Inter } from 'next/font/google';
import ProfileCard from '../components/ProfileCard';
import HighlightCard from '../components/HighlightCard';
import NFTCard from '../components/NFTCard';
import NFT1 from '../assets/NFT1.png';
import NFT2 from '../assets/NFT2.png';
import NFT3 from '../assets/NFT3.png';
import NFT4 from '../assets/NFT4.png';
import NFT5 from '../assets/NFT5.png';
import highlight1 from '../assets/highlight1.png';
import highlight2 from '../assets/highlight2.png';
import highlight3 from '../assets/highlight3.png';
import highlight4 from '../assets/highlight4.png';
import highlight5 from '../assets/highlight5.png';

const nftData = [
  { user: 'Azuki #9839', image: NFT1 },
  { user: 'MAYC #9839', image: NFT4 },
  { user: 'MoonBirds #9839', image: NFT5 },
  { user: 'Otherdeed #9839', image: NFT2 },
  { user: 'Cryptoz #9839', image: NFT3 },
];

const highlightData = [
  {
    name: ' ENS Linked',
    status: 'ENS Linked',
    user: 'dingaling.eth',
    image: highlight1,
    color: '#4BDFFF',
  },
  {
    name: 'Best Flip ',
    status: 'Sold',
    user: 'CryptoPunk #2131',
    image: highlight2,
    color: '#FFC148',
  },
  {
    name: ' Should have..',
    status: 'Mint',
    user: 'Rare Apepe #6974',
    image: highlight3,
    color: '#44FFC8',
  },
  {
    name: ' First NFT bought',
    status: 'Bought',
    user: 'BAYC #7925',
    image: highlight4,
    color: '#4BDFFF',
  },
  {
    name: ' Paper Handed',
    status: 'Sold',
    user: 'Moonbird #7866',
    image: highlight5,
    color: '#44FFC8',
  },
];

export default function Home() {
  return (
    <div className={style.HomeContainer}>
      <ProfileCard />
      <div className={style.HighlightSection}>
        <p>Highlights</p>
        <div className={style.HighlightCardsContainer}>
          {highlightData.map((dat) => (
            <HighlightCard key={dat.user} {...dat} />
          ))}
        </div>
        <div className={style.HighlightCardsContainer}>
          {nftData.map((dat) => (
            <NFTCard key={dat.user} user={dat.user} image={dat.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
