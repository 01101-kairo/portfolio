import styles from "./css/Presentation.module.css";

export default function Presentation() {
  return (
    <section className={styles.presentation} id='Presentation'>
      <h2>Sobre mim</h2>

      <div>
        <div>
          <h3>2018</h3>

          <div className={styles.timeChild }>
            <div className={styles.ball}></div>
            <div className={styles.line}></div>
          </div>

          <p>
            Comecei meu ensino medio no IFMA campos avancados de Porto Franco - MA,
            ensino medio conjuto com ensino tecnico em informatica
          </p>
        </div>

        <div>
          <h3>2019</h3>

          <div className={styles.time}>
            <div className={styles.line}></div>
            <div className={styles.ball}></div>
            <div className={styles.line}></div>
          </div>

          <p>
            ganhei meu primeiro notebook, iniciando no mundo linux, estudando sistemas operacionais unix
            e softwares GNU
          </p>
        </div>

        <div>
          <h3>2022</h3>

          <div className={styles.time}>
            <div className={styles.line}></div>
            <div className={styles.ball}></div>
            <div className={styles.line}></div>
          </div>

          <p>
            Iniciei uma faculdade EAD na FACIMP/ESTACIO formação em ADS, percebi tambem que facudade
            não é muito importante termino ela nesse ano atual 2024
          </p>
        </div>

        <div>
          <h3>2024</h3>

          <div className={styles.time}>
            <div className={styles.line}></div>
            <div className={styles.ball}></div>
          </div>

          <p>
            iniciei minha formação na DNC, para revisar meus conhecimentos e adquirir projetos praticos
            desejo alcanção um primeiro emprego depois formação
          </p>
        </div>
      </div>
    </section>
  )
}

