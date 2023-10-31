import { Container } from "solid-bootstrap"
import { createEffect, createResource, createSignal, For, Show, Suspense } from "solid-js";
import ShopItemCard from "~/components/ShopItemCard";
import { debugItems, testGetAllItems } from "~/shop";

export default function Home() {
  const [data, { refetch }] = createResource(testGetAllItems);
  createEffect(() => {
    if (!data() && !data.loading) {
      refetch();
    }
  })
  return (
    <main>
      <h1>Hey</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <For each={data()}>{(item, i) =>
          <h1>{item.name}</h1>
        }</For>
        <h1>Loaded?</h1>
      </Suspense>
      <Container>
        <For each={debugItems}>{(item, i) =>
          <ShopItemCard product={item}></ShopItemCard>
        }</For>
      </Container>
    </main>
  );
}
