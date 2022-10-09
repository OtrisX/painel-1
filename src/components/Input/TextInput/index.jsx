import { Container, Titulo, AreaTexto } from "./styles.js"

function TextInput({ placeholder, label, name }) {
    return (
        <Container>
            <Titulo>{label}</Titulo>
            <AreaTexto placeholder={placeholder} name={name}></AreaTexto>
        </Container>
    )
}

export default TextInput

