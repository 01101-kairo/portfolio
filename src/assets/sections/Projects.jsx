import Card from "../elements/Card";
import styles from "./css/Projects.module.css"

import pg1 from "../../img/pg1.png";
import pg2 from "../../img/pg2.png";
import pg3 from "../../img/pg3.png";
import pg4 from "../../img/pg4.png";

export default function Projects() {
  return (
    <section className={styles.projects} id='Projects'>
      <h2>Projetos</h2>

      <div>
        <Card
          img  = {pg1}
          title= {'Projeto landing page'}
          text = {'Projetinho de uma landing page com uso js html css.'}
          site = {'https://projeto-landing-page-do-kairo.netlify.app/'}
          github={'https://github.com/01101-kairo/projeto-landing-page'}
        />
        <Card
          img  = {pg2}
          title= {'Projeto ccxp'}
          text = {'Projetinho para fazer o uso de do date() na linguagem JS(java script).'}
          site = {'https://ccxp22-do-kairo.netlify.app/'}
          github={'https://github.com/01101-kairo/CCXP'}
        />
        <Card
          img  = {pg3}
          title= {'Projeto apiJS'}
          text = {'Com o uso do bootstrap contrui essa pagina para o uso de api de clima e cep no JS.'}
          site = {'https://weather-delta-two.vercel.app/'}
          github={'https://github.com/01101-kairo/weather'}
        />
        <Card
          img  = {pg4}
          title= {'Projeto siteGenerico'}
          text = {'Nesse projeto costruo uma pagina com os conhecimento que tenho no fremework bootstrap contendo responsividade'}
          site = {'https://site-generico-do-kairo.netlify.app/'}
          github={'https://github.com/01101-kairo/siteGenerico'}
        />
      </div>
    </section>
  )
}
