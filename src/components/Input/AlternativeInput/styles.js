import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const LetterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 15px;
    color: ${props => props.selected ? "#F0F0F0" : "#00000"};
    background-color: ${props => props.selected ? "#84E5DA" : "#F0F0F0"};
    border-radius: 5px;
    transition: 0.25s;
    cursor: pointer;
`

export const TextInput = styled.input`
    width: 200px;
    padding: 15px;
    background-color: #F8FAFC;
    border: none;
`