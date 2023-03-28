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
            <div className={styles.container}>

                
                <Image src={receitas.capa}
                    className={styles.imagemCapa}
                    alt={receitas.titulo}
                    width="300"
                    height="222"
                    sizes="100"
                    />
                <h2 className={styles.title}>{receitas.titulo}</h2>
                <div className={styles.descricao}>
                    <div className={styles.descricao_icone}>
                        <div className={styles.icone}>
                            <Image src={receitas.iconeTime} width="24" height="24" alt={receitas.titulo} />
                            <p>
                                {receitas.tempoPreparo} minutos
                            </p>
                        </div>

                        <div className={styles.icone}>
                            <Image src={receitas.iconePorcoes} width="24" height="24" alt={receitas.titulo} />
                            <p>
                                {receitas.porcoes} porções
                            </p>
                        </div>
                    </div>
                </div>

                <h2>Ingredientes</h2>
                <ul>
                    <p>{receitas.ingredientes}</p>
                </ul>

                <h2>Modo de preparo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut scelerisque ut tortor eget facilisis. Proin et enim a turpis feugiat placerat. Cras varius rutrum tortor, et auctor magna sodales sit amet. Aliquam erat volutpat. Aenean luctus eros ex. Duis accumsan justo at eros tempor iaculis. Nunc accumsan ultrices odio nec egestas. Aenean non nisi id ligula sollicitudin viverra a sit amet justo. Fusce rhoncus ligula nec libero mollis vehicula. In augue nunc, finibus et magna euismod, porta maximus sapien. Mauris aliquet vehicula porta.

                    Maecenas ut nulla orci. Duis at vulputate lacus. Nulla tincidunt congue felis, tristique varius felis maximus ut. Cras commodo ullamcorper rhoncus. Integer lacinia tellus ut lacus pellentesque hendrerit. Maecenas eget pretium ligula. Fusce vel scelerisque diam.

                    Vestibulum aliquet luctus erat, eu sollicitudin urna suscipit a. Quisque condimentum tristique dolor sed sagittis. Vivamus ut semper orci, quis sodales orci. Morbi ac lorem varius ante venenatis volutpat. Nulla rhoncus nunc sed sem convallis, id finibus dolor pellentesque. In faucibus nibh eu massa feugiat, a vestibulum nisl volutpat. Suspendisse luctus id eros vitae condimentum. Sed fermentum erat eget ante viverra, nec laoreet nibh commodo. Donec sit amet aliquet velit. </p>
            </div>
        </>
    )
}