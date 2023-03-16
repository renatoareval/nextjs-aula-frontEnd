import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Image from "next/image";

import styles from "./Preview.module.css";


export default function Preview() {

    const router = useRouter();
    const { id } = router.query;

    const [receitas, setReceitas] = useState({})

    useEffect(() => {
        axios.get(`/api/receitas/${id}`)
            .then(response => setReceitas(response.data))
    }, [router])


    console.log(receitas.ingredientes)

    return (
        <>
            <Image src={receitas.capa}
                className={styles.imagemCapa}
                alt={receitas.titulo}
                width="220"
                height="220" sizes="100" />
            <p>
                <Image src={receitas.iconeTime} width="24" height="24" alt={receitas.titulo} />

                {receitas.tempoPreparo}
            </p>

            <p>
                <Image src={receitas.iconePorcoes} width="24" height="24" alt={receitas.titulo} />

                {receitas.porcoes}
            </p>

            <h2>Ingredientes</h2>
            <ul>
                <p>{receitas.ingredientes}</p>
            </ul>

            <h2>Modo de preparo</h2>

        </>
    )
}