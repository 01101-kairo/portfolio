import TimeCard from "../elements/TimeCard";
import styles from "./css/Presentation.module.css";

export default function Presentation() {
  return (
    <section className={styles.presentation} id='Presentation'>
      <h2>Sobre mim</h2>
      <div>
        <TimeCard
          ano = '2018'
          lineLeft = {false}
          ball = {true}
          lineRight = {true}
          texto = 'Comecei meu ensino médio no IFMA campos avançados de Porto Franco - MA, ensino médio conjunto com ensino técnico em informática'
        />

        <TimeCard
          ano = '2019'
          lineLeft = {true}
          ball = {true}
          lineRight = {true}
          texto = 'ganhei meu primeiro notebook, iniciando no mundo Linux, estudando sistemas operacionais Unix e softwares GNU'
        />

        <TimeCard
          ano = '2022'
          lineLeft = {true}
          ball = {true}
          lineRight = {true}
          texto = 'Iniciei uma faculdade EAD na FACIMP/ESTACIO formação em ADS, percebi também que faculdade não é muito importante, termino ela nesse ano atual 2024'
        />

        <TimeCard
          ano = '2024'
          lineLeft = {true}
          ball = {true}
          lineRight = {false}
          texto = 'iniciei minha formação na DNC, para revisar meus conhecimentos e adquirir projetos praticos desejo alcanção um primeiro emprego depois formação'
        />
      </div>
    </section>
  )
}

