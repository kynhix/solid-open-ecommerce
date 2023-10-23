import { createMemo } from "solid-js";
import { createStore } from "solid-js/store";
import { shopItem } from "./shop";

export type cartItem = {
  item: shopItem,
  quantity: number,
}

export const [cart, setCart] = createStore({
  items: retrieveCart(),
});

function retrieveCart() {
  const res = [];
  return res;
}
