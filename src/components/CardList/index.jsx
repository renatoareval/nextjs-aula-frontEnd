import Card from "../Card";
import styles from "./CardList.module.css";


export default function CardList({ receitas }) {

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