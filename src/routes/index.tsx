import { Container } from "solid-bootstrap"
import ShopItemCard from "~/components/ShopItemCard";

export default function Home() {
  return (
    <main>
      <h1>Hey</h1>
      <Container>
        <ShopItemCard product={{ name: "testing" }}></ShopItemCard>
      </Container>
    </main>
  );
}
