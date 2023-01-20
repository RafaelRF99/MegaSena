import styles from '../../styles/megasena.module.css'

export default function Banner() {
    return (
        <div>
            <div className={styles.imagem}>
                <div className={styles.container__Banner}>
                    <h1 className={styles.title}>Mega Sena</h1>
                    <div className={styles.subtitle}>
                        <p>Aqui você vai descobrir o número da Mega Sena!</p>
                        <p>Pode confiar, 100% seguro!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}