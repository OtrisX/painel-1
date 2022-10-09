import { useState } from "react"
import { Container, TextInput, LetterBox } from "./styles"

function AlternativeInput({ alternative, onClick, value, selected }) {

  return (
    <div>
      <LetterBox selected={selected == value ? true : false} onClick={onClick}>{alternative}</LetterBox>
      <input type="radio" value={value} name="alternative" hidden checked={selected == value ? true : false}/>
    </div>
  )
}

export default AlternativeInput