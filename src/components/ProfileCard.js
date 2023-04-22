import Image from 'next/image';
import styles from './ProfileCard.module.css';
import avatar from '../assets/avatar.png';
import community1 from '../assets/community-1.png';
import community2 from '../assets/community-2.png';
import community3 from '../assets/community-3.png';
import community4 from '../assets/community-4.png';
import Chip from './Chip';

import { AiOutlineTwitter } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi';

const ProfileCard = () => {
  return (
    <div className={styles.ProfileCardContainer}>
      <div className={styles.ProfileUserInfo}>
        <div className={styles.ProfileUserInfoLeft}>
          <Image
            className={styles.ProfileUserInfoAvatar}
            width={72}
            height={72}
            alt='avatar'
            src={avatar}
          />
          <p className={styles.ProfileUserInfoLevel}> LVL 2 </p>
        </div>
        <div className={styles.ProfileUserNameContainer}>
          <h2 className={styles.ProfileUserNameInfo}>dingaling.eth</h2>
          <h5 className={styles.ProfileUserName}>0xadghjhe</h5>
        </div>
      </div>
      <div className={styles.ProfileUserDetail}>
        <div className={styles.ProfileUserTwitter}>
          <AiOutlineTwitter color='#1D9BF0' />
          @dingalingts
        </div>
        <div className={styles.ProfileUserTwitter}>
          <BiGlobe color='#A2A2A2' />
        </div>
      </div>
      <div className={styles.ProfileUserBio}>
        An Investor / Collector of #NFTs and OG enthusiast. Co-Founder and owner of 📦 @nftboxes
      </div>
      <div className={styles.ProfileUserCommunities}>
        <p className={styles.ProfileUserCommunitiesTitle}>Common communties (3)</p>
        <div className={styles.ProfileUserCommunitiesContainer}>
          <Image width={48} height={48} alt='Community-1' src={community1} />
          <Image width={48} height={48} alt='Community-2' src={community2} />
          <Image width={48} height={48} alt='Community-3' src={community3} />
          <Image width={48} height={48} alt='Community-4' src={community4} />
        </div>
      </div>
      <div className={styles.ProfileUserInterest}>
        <Chip art='Art' highlight={true} percent='12' />
        <Chip art='Utility' highlight={true} percent='12' />
        <Chip art='PFP' percent='12' />
        <Chip art='Metaverse' percent='12' />
        <Chip art='Gaming' percent='12' />
        <Chip art='PFP' percent='12' />
        <Chip art='ens' percent='12' />
      </div>
      <button className={styles.ProfileUserButton}>Subscribe {'>>'} </button>
    </div>
  );
};

export default ProfileCard;
