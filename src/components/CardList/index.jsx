import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./CardList.module.css";


export default function CardList() {

    const [receitas, setReceitas] = useState([
        
    ])

    useEffect(()=>{
        axios.get("/api/receitas/")
        .then(response => setReceitas(response.data))
    },[])


    return (

        <div className={styles.CardList}>
            {receitas.map(receita => {
                return <Card
                    key={receita.id}
                    id={receita.id}
                    imagem={receita.imagem}
                    titulo={receita.titulo}
                    tempoPreparo={receita.tempoPreparo}
                    porcoes={receita.porcoes} 
                    iconePorcoes={receita.iconePorcoes}
                    iconeTime={receita.iconeTime}
                    />
            })}


        </div>



    )
}