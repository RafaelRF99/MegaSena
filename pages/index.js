import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <h1 className={styles.title}>Entre na Página da Mega Sena</h1>
        <a href="./paginas/megasena"><button className={styles.botao}>Entrar</button></a>
      </section>
    </>
  )
}