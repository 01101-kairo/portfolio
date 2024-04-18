import { FaFigma, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./css/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.interno}>
          <p>
            Meu contato:
          </p>
          <a href="https://wa.me/55218979878978">
            (99) 982455137
          </a>
        </div>
        <div className={styles.interno}>
          <p>
            Email:
          </p>
          <a href="mailto:kairomilhomem@gmail.com">
            kairomilhomem@gmail.com
          </a>
        </div>
      </div>
      <div>
        <nav>
          <ul>
            <li><a href="https://github.com/01101-kairo/" aria-label="caminho para o meu github"><FaGithub size={50}/></a></li>
            <li><a href="https://www.linkedin.com/in/kairo-costa-b5a3b1196/" aria-label="caminho para o meu linkdin"><FaLinkedin size={50}/></a></li>
            <li>
              <a 
                href="https://www.figma.com/file/O2j7uVVhXUnV6dadZc2MMw/Desafio-03%3A-Desenvolva-um-portf%C3%B3lio-com-React-hooks?type=design&node-id=0%3A1&mode=design&t=Hpl7aIhWt0vdutHj-1"
                aria-label="figma dessa pagina"
              ><FaFigma size={50}/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
