import styles from '../../styles/megasena.module.css'

export default function Display(props) {
    return (
        <div className={styles.container_display}>
            {props.numero}
        </div>
    )
}