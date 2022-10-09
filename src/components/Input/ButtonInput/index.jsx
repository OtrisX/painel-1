import { Botao } from "./styles"

function ButtonInput({ onClick, children }){
    return(
        <Botao onClick={onClick}>{children}</Botao>
    )
}

export default ButtonInput