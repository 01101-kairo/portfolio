import BTN from "../elements/Button"
import styles from "./css/Im.module.css"
import rosto from "../img/rosto.webp";

import { useEffect, useState } from "react";

export default function Im() {
  const [text, setText] = useState('')
  const toRotate = ['Olá, eu sou o Kairo!', 'sou Dev front-end']
  const [loop, setLoop] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const period = 100
  const [delta, setIsDelta] = useState(100)

  useEffect(()=>{
    let ticker = setInterval(()=>{
      toType()
    },delta)
    return()=>{clearInterval(ticker)}
  },[text])

  const toType = () => {
    let i = loop % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting? fullText.substring(0, text.length -1):fullText.substring(0, text.length +1)

    setText(updatedText)

    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setIsDelta(period)
    }else if (isDeleting && updatedText === '' ){
      setIsDeleting(false)
      setIsDelta(period)
      setLoop(loop+1)
    }
  }

  return (
    <section className={styles.im} id='Im'>

      <figure>
        <picture>
          <source srcSet={"https://avatars.githubusercontent.com/u/57676304?v=4"} media="(max-width: 767px )"/>
          <img src={"https://avatars.githubusercontent.com/u/57676304?v=4"} alt="foto do meu rosto sorindo" width="259" height="259"/>
        </picture>
        <figcaption></figcaption>
      </figure>

      <h1>{text}|</h1>
      <div>
        <p>
          Tenho 21 anos, estou no meu último ano de faculdade ADS(Análise de desenvolvimento de sistemas),
          estou em busca de experiência profissional, e já tenho alguns projetos pessoais.
        </p>
        <BTN text={'repositorio github' } link={'https://github.com/01101-kairo?tab=repositories'} description={'meu repositorio github'}/>
      </div>
    </section>
  )
}
