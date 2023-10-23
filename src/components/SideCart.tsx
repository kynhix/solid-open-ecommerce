import { Offcanvas } from "solid-bootstrap";
import { createSignal, For } from "solid-js"
import { cart } from "~/cart";
import SideCartItem from "./SideCartItem";

export const [showSideCard, setShowSideCart] = createSignal(false);

// This is the persistent cart found on every single page.
export default function SideCart() {
  return (
    <Offcanvas show={showSideCard()} onHide={() => setShowSideCart(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <For each={cart.items}>{(item, i) =>
          <SideCartItem />
        }</For>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
