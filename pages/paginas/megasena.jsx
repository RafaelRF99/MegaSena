import { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Display from '../../components/Display/Display'
import styles from '../../styles/megasena.module.css'
import { mega } from '../../functions/mega'

export default function megasena() {
    const [numero, setNumero] = useState([]);
    const qtd = 6

    function renderizar() {
        return numero.map(n => <Display key={n} numero={n} />)
    }

    return (
        <div className={styles.container}>
            <Banner />
            <div className={styles.botao}>
                <h2>Clique no botão para gerar os números</h2>
                <button className={styles.botao_gerar} onClick={() => setNumero(mega(qtd))}>Gerar número</button>
            </div>
            <div className={styles.renderizado}>
                {renderizar()}
            </div>
        </div>
    )
}