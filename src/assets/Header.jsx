import styles from "./css/Header.module.css";

import {FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <header className={styles.header} id='Header'>
      <nav>
        <ul>
          <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
          <li><Nav.Link href="#Presentation">Tecnologias</Nav.Link></li>
          <li><Nav.Link href="#Im">Sobre mim</Nav.Link></li>
        </ul>

        <ul>
          <li><a href="https://github.com/01101-kairo/" aria-label="caminho para o meu github"><FaGithub size={20}/></a></li>
          <li><a href="https://www.linkedin.com/in/kairo-costa-b5a3b1196/" aria-label="caminho para o meu linkdin"><FaLinkedin size={20}/></a></li>
        </ul>
      </nav>
    </header>
  )
}

