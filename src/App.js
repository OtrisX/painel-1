import styled from "styled-components"
import TextInput from "./components/textInput"
import ButtonInput from "./components/buttonInput"
import CategoriasInput from "./components/categoriasInput"
import LatexPreview from "./components/latexpreview"
import { useState } from "react"
import { Worker } from '@react-pdf-viewer/core';



const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
`

const Form = styled.form`
  height: 100%;
  width: 70%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const FormWrapper = styled.div`
  width: 90%;
  height: 90%;

  display: flex;
`

const Preview = styled.div`
  height: 100%;
  width: 30%;
`

const ButtonsArea = styled.div`
  height: 100%;
  width: 20%;
`

const TextArea = styled.div`
  height: 100%;
  width: 80%;

  display: flex;
  flex-direction: column;
`

const TextBlock = styled.div`
  height: 100%;
  width: 100%;
`
const ButtonBlock = styled.div`
  margin-top: 28px;
  
  width: 100%;
  height: calc(100% - 28px);

  display: flex;
  flex-direction: column;
  align-items: center;
`

const CategoriasWrapper = styled.div`
  height: 100%;
  width: 150px;

  overflow-x: visible;
`


function App() {

  const [data ,setData] = useState({
    enunciado: "",
    date: "",
    resolucao: ""
  })

  function handleData(e){
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }

  function handleCompile(){
    console.log("cu")
  }



  return (
    <Container>
      <Form onChange={(e) => handleData(e)}>
        <FormWrapper>
          <ButtonsArea>
            <ButtonBlock>
              <ButtonInput label="Compilar" onClick={handleCompile}/>
              <ButtonInput label="Enviar"/>
              <CategoriasWrapper>
                <CategoriasInput label="ITA"/>
              </CategoriasWrapper>
            </ButtonBlock>
          </ButtonsArea>
          <TextArea>
            <TextBlock>
              <TextInput name="enunciado" label="Enunciado"/>
            </TextBlock>
            <TextBlock>
              <TextInput name="alternativas" label="Alternativas" />
            </TextBlock>
            <TextBlock>
              <TextInput name="solucao" label="Solução" />
            </TextBlock>
          </TextArea>
        </FormWrapper>
      </Form>
      <Preview>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
          <LatexPreview />
        </Worker>
      </Preview>
    </Container>
  )
}

export default App