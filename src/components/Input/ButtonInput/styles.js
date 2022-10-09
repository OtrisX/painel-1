import styled from "styled-components"

export const Botao = styled.button`
    background-color: #84E5DA;
	border: none;
	color: #ffffff;
	font-family: Arial;
	font-size: 18px;
    border-radius: 10px;

    width: 150px;
    height: 50px;
    transition: 0.55s;

    &:hover{
        background-color: #17ccd6;
        transition: 0.5s;
        cursor: pointer;
    }
`