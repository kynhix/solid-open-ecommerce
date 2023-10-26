import { Container } from "solid-bootstrap"
import { createEffect, For } from "solid-js";
import ShopItemCard from "~/components/ShopItemCard";
import { debugItems, testGetAllItems } from "~/shop";

export default function Home() {
  createEffect(async () => {
    await testGetAllItems();
  })
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
