import Menu from "./Menu"
import Titulos from "./Titulos"

export default function TitulosPage(){
    return (
        <div>
            <h1>Titulos</h1>
            <Menu />
            <Titulos cor="green" />
            <Titulos cor="blue" />
            <Titulos cor="red" />
            <Titulos cor="purple)" />
        </div>
    )
}