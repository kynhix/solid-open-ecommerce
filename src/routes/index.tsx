import { Container } from "solid-bootstrap"
import { For } from "solid-js";
import ShopItemCard from "~/components/ShopItemCard";
import { debugItems } from "~/shop";

export default function Home() {
  return (
    <main>
      <h1>Hey</h1>
      <Container>
        <For each={debugItems}>{(item, i) =>
          <ShopItemCard product={item}></ShopItemCard>
        }</For>
      </Container>
    </main>
  );
}
