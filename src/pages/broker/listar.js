import ListarDispositivos from "../components/ListarDispositivos"
import NavbarPrincipal from "../components/NavbarPrincipal"

export default function PaginaListar(){
    return(
    <>
    <NavbarPrincipal/>
    <fieldset className="fundolistar">
        <fieldset className="linhastabela">
            <ListarDispositivos />        
            <div className="deseja"><a href="cadastrar">Deseja adicionar um novo dispositivo?</a></div>
        </fieldset>
    </fieldset>
    </>
    )
}