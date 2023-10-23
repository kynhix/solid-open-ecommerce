import { VoidProps } from "solid-js";
import { shopItem } from "~/shop";

export default function SideCartItem({ product }: VoidProps<{ product: shopItem }>) {
  return (
    <div class="tw-flex tw-flex-row tw-h-28 tw-w-full tw-overflow-hidden">
      <img src={product.img} class="tw-aspect-square" />
      <div class="tw-flex-col">
        <div class="bg-light border"><p class="tw-m-0">{product.name}</p></div>
        <div class="bg-light border">This is a really long string to test the bullshit and stuff</div>
      </div>
    </div>
  )
}
