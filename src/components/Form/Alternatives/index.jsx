import React, { useState } from 'react'
import AlternativeInput from '../../Input/AlternativeInput'
import { Container } from './styles'

export default function Alternatives({ handleSelect, selected }) {
  return (
    <>
      <Container>
        <AlternativeInput alternative="A" value={1} selected={selected} onClick={handleSelect}/>
        <AlternativeInput alternative="B" value={2} selected={selected} onClick={handleSelect}/>
        <AlternativeInput alternative="C" value={3} selected={selected} onClick={handleSelect}/>
        <AlternativeInput alternative="D" value={4} selected={selected} onClick={handleSelect}/>
        <AlternativeInput alternative="E" value={5} selected={selected} onClick={handleSelect}/>
      </Container>
    </>
  )
}
