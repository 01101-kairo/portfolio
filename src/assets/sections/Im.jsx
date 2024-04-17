import BTN from "../elements/Button"
import styles from "./css/Im.module.css"
import { useEffect, useState } from "react";

export default function Im() {
  const [text, setText] = useState('')
  const toRotate = [' me chamo Kairo Costa!', ' sou desenvolvedor front-end']
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
      <h1> Olá, eu {text}</h1>
      <div>
        <p>Tenho 21 anos, estou no meu utimo ano de facudade ADS(Analise de desenvolvimento de sistemas), estou em busca de esperiencia proficional, e já tenho alguns projetos pessoais</p>
        <BTN text={'veja meu repositorio github' } link={'https://github.com/01101-kairo?tab=repositories'}/>
      </div>
    </section>
  )
}
