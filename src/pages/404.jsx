import Header from "../components/Header"
import Image from "next/image"

export default function Pagina404() {
    return (
        <>
            <Header />
            <div style={{display:'flex',flexDirection:'column' , alignItems:'center'}}>
                <h1 style={{ textAlign: "center", fontSize: "96px" }}>Página não encontrada</h1>
                <Image src="/404.png" width="569" height="557" sizes="100" />
            </div>

        </>
    )
}
