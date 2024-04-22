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
            Comecei meu ensino médio no IFMA campos avançados de Porto Franco - MA,
            ensino médio conjunto com ensino técnico em informática
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
            ganhei meu primeiro notebook, iniciando no mundo Linux, estudando
            sistemas operacionais Unix e softwares GNU
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
            Iniciei uma faculdade EAD na FACIMP/ESTACIO formação em ADS, percebi
            também que faculdade não é muito importante, termino ela nesse ano atual 2024
          </p>
        </div>

        <div>
          <h3>2024</h3>

          <div className={styles.time}>
            <div className={styles.line}></div>
            <div className={styles.ball}></div>
          </div>

          <p>
            iniciei minha formação na DNC, para revisar meus conhecimentos e adquirir
            projetos praticos desejo alcanção um primeiro emprego depois formação
          </p>
        </div>
      </div>
    </section>
  )
}

