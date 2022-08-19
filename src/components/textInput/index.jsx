import styled from "styled-components"

const Texto = styled.textarea`
    resize: none;
    width: 100%;
    height: calc(100% - 50px);
    margin-left: 20px;
`
const Titulo = styled.label`
    display: block;
    font-size: 24px;
`


function TextInput(props) {
    

    return (
        <>
            <Titulo>/Begin({props.label})</Titulo>
            <Texto name={props.name}></Texto>
        </>
    )
}

export default TextInput

