import { VoidProps } from "solid-js";
import { shopItem } from "~/shop";

export default function SideCartItem({ product }: VoidProps<{ product: shopItem }>) {
  return (
    <div class="tw-w-full tw-h-32 tw-bg-white tw-rounded-lg tw-border tw-justify-start tw-items-start tw-inline-flex">
      <img class="tw-w-32 tw-h-32" src="https://via.placeholder.com/128x128" />
      <div class="tw-grow tw-shrink tw-basis-0 tw-self-stretch tw-px-2 tw-border-l tw-flex-col tw-justify-start tw-items-start tw-gap-2 tw-inline-flex">
        <div class="tw-self-stretch tw-text-black tw-text-xl tw-font-medium">Title</div>
        <div class="tw-self-stretch tw-text-ellipsis tw-line-clamp-3 tw-text-black tw-text-xs tw-font-normal ">This is meant to be a short description of the item and if it goes too far it will trail off. Here let me show you can example of why you shouldn’t make your descriptions too long.</div>
        <div class="tw-mt-auto tw-self-stretch tw-justify-start tw-items-start tw-inline-flex">
          <div class="tw-w-24 tw-h-8 tw-bg-white tw-rounded tw-shadow tw-justify-start tw-items-start tw-flex">
            <div class="tw-w-8 tw-h-8 tw-relative tw-bg-sky-500 tw-shadow"></div>
            <div class="tw-w-8 tw-h-fit tw-m-auto tw-text-center tw-text-black text-xl tw-font-normal">1</div>
            <div class="tw-w-8 tw-h-8 tw-relative tw-bg-sky-500 shadow"></div>
          </div>
          <div class="tw-grow tw-shrink tw-basis-0 tw-self-stretch tw-text-right tw-text-neutral-500 tw-text-xl tw-font-normal">$1.00</div>
        </div>
      </div>
    </div>
  )
  // return (
  //   <div class="tw-flex tw-flex-row tw-h-28 tw-w-full tw-overflow-hidden">
  //     <img src={product.img} class="tw-aspect-square" />
  //     <div class="tw-flex-col">
  //       <div class="bg-light border"><p class="tw-m-0">{product.name}</p></div>
  //       <div class="bg-light border">This is a really long string to test the bullshit and stuff</div>
  //     </div>
  //   </div>
  // )
}
