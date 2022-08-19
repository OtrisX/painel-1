import styled from "styled-components"

const Titulo = styled.label `
    font-size: 22px;
`

const Categoria = styled.input`
    margin: 0 5px 5px 0;
    padding: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;

`

const Container = styled.div `
    width: fit-content;
    height: fit-content;

    display: flex;
    
`

function CategoriasInput(props){
    return(
        <Container>
            <Categoria type="checkbox"/>
            <Titulo>{props.label}</Titulo>
        </Container>
    )
}

export default CategoriasInput