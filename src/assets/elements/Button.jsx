import styles from "./css/Button.module.css";

export default function Button({text, link, description}) {
  return (
    <>
      <a href={link} aria-label={description}>
        <button className={styles.btn}>{text}</button>
      </a>
    </>
  )
}

