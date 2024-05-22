import styles from "./../sections/css/Presentation.module.css";
export default function TimeCard({ano, texto, lineLeft, ball,  lineRight}) {
  return (
    <div>
      <h3>{ano}</h3>

      <div className={styles.time}>
        {lineLeft ? <div className={styles.line}></div> :  <div className={styles.lineNone}></div>}
        {ball ? <div className={styles.ball}></div> : <div className={styles.ballNone}></div>}
        {lineRight ? <div className={styles.line}></div> : <div className={styles.lineNone}></div>}
      </div>

      <p>{texto}</p>
    </div>
  )
}
