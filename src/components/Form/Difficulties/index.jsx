import { Container, DifficultyContainer } from "./styles"

export default function Difficulties({ onChange }) {
  return (
    <Container onChange={onChange}>
      {[1, 2, 3, 4, 5].map(i => 
        <DifficultyContainer>
          <input type="radio" name="difficulty" value={i}/>
          <label for="difficulty">{i}</label>
        </DifficultyContainer>
      )}
    </Container>
  )
}
