import { Container, Categoria, Titulo } from "./styles.js"

function CategoriasInput(props){
    return (
        <Container>
            <Categoria type="checkbox"/>
            <Titulo>{props.label}</Titulo>
        </Container>
    )
}

export default CategoriasInput