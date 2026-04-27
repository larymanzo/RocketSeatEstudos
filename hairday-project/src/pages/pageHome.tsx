import Button from "../components/button";
import Container from "../components/container";

export default function PageHome() {
  return (
    <Container as="article" className="space-y-3">
      <header className="flex items-center justify-between text-yellow">
        teste
      </header>
      <Button>Botão</Button>
    </Container>
  );
}
