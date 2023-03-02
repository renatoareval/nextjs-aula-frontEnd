import Image from "next/image"
import iconeRodape from './Frame.svg'
import styles from './Rodape.module.css'
export default function Rodape() {
    return (
        <footer className={styles.rodape}>
          
                <Image src={iconeRodape} />
                <div>
                    <p>Fritando ovo - Receitas fáceis</p>
                    <p>2022</p>
                </div>

         
        </footer>
    )
}