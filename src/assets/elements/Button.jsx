import styles from "./css/Button.module.css";

export default function Button({text, link}) {
  return (
    <>
      <a href={link}>
        <button className={styles.btn}>{text}</button>
      </a>
    </>
  )
}

