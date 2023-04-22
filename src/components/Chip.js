import styles from './Chip.module.css';

const Chip = (props) => {
  return (
    <div className={props.highlight ? styles.ChipHighlightContainer : styles.ChipContainer}>
      {props.art}
      <span style={{ marginLeft: '8px' }}>{props.percent}%</span>
    </div>
  );
};

export default Chip;
