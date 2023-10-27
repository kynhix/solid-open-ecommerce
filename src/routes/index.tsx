import { User } from "@supabase/supabase-js";
import { Container } from "solid-bootstrap"
import { createEffect, createSignal, For, Show } from "solid-js";
import ShopItemCard from "~/components/ShopItemCard";
import { debugItems, testGetAllItems } from "~/shop";
import { supabase } from "~/supabaseClient";

export default function Home() {
  const [user, setUser] = createSignal<User | null>(null);
  createEffect(async () => {
    await testGetAllItems();
    await supabase.auth.getUser().then((response) => {
      setUser(response.data.user)
    }).catch(reason => {
      console.log(reason);
    }).finally(() => {
      console.log("I WORKED")
    })
  })
  return (
    <main>
      <h1>Hey</h1>
      <Show when={user()} fallback={<h1>This is something isn't it</h1>}>
        <p>user()</p>
      </Show>
      <Container>
        <For each={debugItems}>{(item, i) =>
          <ShopItemCard product={item}></ShopItemCard>
        }</For>
      </Container>
    </main>
  );
}
