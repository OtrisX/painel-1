import TextInput from "../Input/TextInput"
import ButtonInput from "../Input/ButtonInput"
import Alternatives from "./Alternatives"
import Difficulties from "./Difficulties"
import Filters from "./Filters"
import LatexPreview from "../LatexPreview"
import { Titulo } from "../Input/TextInput/styles"
import { FormContainer, TextContainer, FormSection, ButtonsContainer, PreviewSection } from "./styles"

import toast from 'react-hot-toast'

import { useEffect, useState } from "react"

export default function Form() {
  const [data, setData] = useState({
    statement: "",
    alternatives: "",
    solution: "",
    answer: null,
    difficulty: null,
  })
  const [selected, setSelected] = useState()
  const [pdfUrl, setPdfUrl] = useState("")
  const [categoryId, setCategoryId] = useState()
  const [availableCategories, setAvailableCategories] = useState([])

  useEffect(() => {
    fetch("http://localhost:3333/categories")
        .then(resp => resp.json())
        .then(resp => setAvailableCategories(resp))
  }, [])

  function handleCompile(e){
    e.preventDefault()

    fetch("http://localhost:3333/compile", {
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) {toast.success("Questão compilada com sucesso!")}
      else {toast.error("Não foi possível compilar a questão")}
      return response
    })
    .then(response => response.blob())
    .then(blob => setPdfUrl(URL.createObjectURL(blob)))
    .catch((e) => toast.error("Erro"))
  }

  function handleSave(e){
    e.preventDefault()

    fetch(`http://localhost:3333/categories/${categoryId}/exercises`, {
      mode: "cors",
      headers: {"Content-Type": "application/json"},
      method: "POST",
      body: JSON.stringify({exercise: data})
    })
    .then(response => {
      if (response.status === 201) {toast.success("Questão salva com sucesso!")}
      else {toast.error("Não foi possível salvar a questão")}
      return response
    })
    .catch((e) => toast.error("Erro"))
  }

  function handleDataChange(e){
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
  }
  
  function handleSelectAnswer(e) {
    const newSelected = Number(e.target.parentNode.children[1].value)
    const newData = {...data}
    if (newSelected === selected) {
      setSelected()
      newData["answer"] = null
    } else {
      setSelected(newSelected)
      newData["answer"] = newSelected
    }
    setData(newData)
  }

  function handleSelectCategory(current) {
    setCategoryId(current.value)
  }

  return (
    <FormContainer>
      <FormSection>
        <TextContainer onChange={handleDataChange}>
          <TextInput label="Enunciado" placeholder="Insira o enunciado" name="statement" />
          <TextInput label="Alternativas" placeholder="Insira as alternativas" name="alternatives" />
          <TextInput label="Solução" placeholder="Insira a solução" name="solution" />
        </TextContainer>
        <div>
          <Titulo>Gabarito</Titulo>
          <Alternatives
            handleSelect={handleSelectAnswer}
            selected={selected}
          />
        </div>
      </FormSection>
      <PreviewSection>
        <LatexPreview pdfURL={pdfUrl}/>
        <div>
          <Titulo>Dificuldade</Titulo>
          <Difficulties onChange={handleDataChange}/>
        </div>
        <div>
          <Titulo>Categoria</Titulo>
          <Filters
            availableCategories={availableCategories}
            onChange={handleSelectCategory}
            selectedCategoryId={categoryId}
          />
        </div>
        <ButtonsContainer>
          <ButtonInput onClick={handleCompile}>Compilar</ButtonInput>
          <ButtonInput onClick={handleSave}>Salvar</ButtonInput>
        </ButtonsContainer>
      </PreviewSection>
    </FormContainer>
  )
}
