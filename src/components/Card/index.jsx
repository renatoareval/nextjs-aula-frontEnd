import styles from "./Card.module.css";
import Image from "next/image";

import Link from "next/link";

export default function Card({ id, titulo, tempoPreparo, porcoes, imagem, iconeTime, iconePorcoes }) {



    return (
        <div className={styles.card}>
            <Link href={`visualizar/${id}`}>
                <img className={styles.card_imagem} src={imagem} />
                <h2 className={styles.card_title}>{titulo}</h2>
                <div className={styles.card_descricao}>

                    <Image src={iconeTime} className={styles.card_imagens} width="24" height="24" />
                    <Image src={iconePorcoes} alt="pote" width="24" height="24" />

                    <span className={styles.card_info1}>{tempoPreparo} minutos </span>
                    <span className={styles.card_info2}>{porcoes} pessoas</span>
                </div>
            </Link>
        </div>
    )
}