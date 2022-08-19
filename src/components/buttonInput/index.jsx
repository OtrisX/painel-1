import styled from "styled-components"

const Botao = styled.button`
    background-color:#44c767;
	border:1px solid #18ab29;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	text-decoration:none;

    width: 150px;
    height: 50px;

    margin-bottom: 20px;

    &:hover{
        background-color:#5cbf2a;
    }

    &:active{
        position:relative;
	    top:1px;
    }
`

function ButtonInput(props){
    return(
        <>
            <Botao type="button" onClick={props.onClick}>{props.label}</Botao>
        </>
    )
}

export default ButtonInput