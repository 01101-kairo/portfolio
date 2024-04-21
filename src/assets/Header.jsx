import styles from "./css/Header.module.css";

import {FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  const  hamburger = () => {

    let menuButton = document.getElementById("menu-button")
    let menu = document.getElementById("menu")

    menuButton.addEventListener("click", function() {
      if (menu.style.display === "flex") {
        menu.style.display = "none"
      } else {
        menu.style.display = "flex"
      }
    })
  }

  return (
    <header className={styles.header} id='Header'>
      <button id="menu-button" onClick={hamburger}>&#9776;</button>

      <nav id="menu">
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

