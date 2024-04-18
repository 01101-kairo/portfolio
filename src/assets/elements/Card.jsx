import BTN from "./Button";
import styles from "./css/card.module.css";

export default function Card({img,title, text, site, github}) {
  return (
    <div className={styles.card}>
      <a href={site} aria-label='pagina desse projeto'>
        <img src={img} alt="ERROR"/>
      </a>
      <h3>{title}</h3>
      <p>{text}</p>
      <BTN text={'Repositorio github'} link={github} description={'repositorio desse projeto'}/>
    </div>
  )
}

