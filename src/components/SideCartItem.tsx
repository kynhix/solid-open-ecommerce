import { Stack } from "solid-bootstrap";
import { VoidProps } from "solid-js";
import { shopItem } from "~/shop";

export default function SideCartItem({ product }: VoidProps<{ product: shopItem }>) {
  return (
    <div>
      <div class="bg-light border">{product.name}</div>
      <div class="bg-light border">Second item</div>
      <div class="bg-light border">Third item</div>
    </div>
  )
}
