import styles from "./css/Header.module.css";

import {FaLinkedin, FaGithub } from "react-icons/fa";
import { GiHamburgerMenu  } from "react-icons/gi";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <header className={styles.header} id='Header'>
      <button id="menu-button" onClick={() => setMenuVisible(!menuVisible)}>
        <GiHamburgerMenu size={40}/>
      </button>

      <nav style={{display: menuVisible? "flex": "none"}}>
        <ul>
          <li><Nav.Link href="#Projects">Projetos</Nav.Link></li>
          <li><Nav.Link href="#Presentation">Tecnologias</Nav.Link></li>
          <li><Nav.Link href="#Im">Sobre mim</Nav.Link></li>
        </ul>

        <ul>
          <li><a href="https://github.com/01101-kairo/" aria-label="caminho para o meu github"><FaGithub size={20}/></a></li>
          <li><a href="https://www.linkedin.com/in/kairo-costa-front-end/" aria-label="caminho para o meu linkdin"><FaLinkedin size={20}/></a></li>
        </ul>
      </nav>
    </header>
  )
}

