import { Container } from "./styles"
import Navbar from "./Navbar"

export default function Header() {
  return (
    <Container>
      <div>
        <h1>Glypho</h1>
      </div>
      <Navbar/>
    </Container>
  )
}
