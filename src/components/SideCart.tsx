import { Offcanvas } from "solid-bootstrap";
import { createSignal } from "solid-js"

export const [showSideCard, setShowSideCart] = createSignal(false);

// This is the persistent cart found on every single page.
export default function SideCart() {
  return (
    <Offcanvas show={showSideCard()} onHide={() => setShowSideCart(false)} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
