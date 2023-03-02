import { useState } from "react";
import Card from "../Card";
import styles from "./CardList.module.css";


export default function CardList() {

    const [receitas, setReceitas] = useState([
        { id: 1, titulo: "Roscov", tempoPreparo: "25", porcoes: "2", imagem: "imagens/foto-1.png" },
        { id: 2, titulo: "Arroz com pepino", tempoPreparo: "35", porcoes: "3", imagem: "imagens/foto-2.png" },
        { id: 3, titulo: "Ovo com abacate", tempoPreparo: "15", porcoes: "1", imagem: "imagens/foto-3.png" },
        { id: 4, titulo: "Ovo de codorna", tempoPreparo: "25", porcoes: "2", imagem: "imagens/foto-4.png" },
        { id: 5, titulo: "Omelete com abacate", tempoPreparo: "35", porcoes: "3", imagem: "imagens/foto-5.png" },
        { id: 6, titulo: "Ovo com manteiga", tempoPreparo: "15", porcoes: "1", imagem: "imagens/foto-6.png" },
        { id: 7, titulo: "Ovo de codorna", tempoPreparo: "25", porcoes: "2", imagem: "imagens/foto-7.png" },
        { id: 8, titulo: "Omelete com abacate", tempoPreparo: "35", porcoes: "3", imagem: "imagens/foto-8.png" },
        { id: 9, titulo: "Ovo com manteiga", tempoPreparo: "15", porcoes: "1", imagem: "imagens/foto-9.png" }
      ])

    return (

        <div className={styles.CardList}>
            {receitas.map(receita => {
                return <Card
                    key={receita.id}
                    imagem={receita.imagem}
                    titulo={receita.titulo}
                    tempoPreparo={receita.tempoPreparo}
                    porcoes={receita.porcoes} />
            })}


        </div>



    )
}