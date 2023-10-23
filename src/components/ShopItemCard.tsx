import { Card } from "solid-bootstrap";
import { VoidProps } from "solid-js";
import { A } from "solid-start";
import { setCart } from "~/cart";
import { shopItem } from "~/shop";

export default function ShopItemCard({ product }: VoidProps<{ product: shopItem }>) {
  const handleClick = (e: MouseEvent) => {
    console.log("I WAS CLICKED!");
    setCart('items', l => [...l, product])
    e.preventDefault();
  }
  return (
    <Card style={{ width: '18rem', overflow: "hidden" }}>
      <A href="/" onClick={handleClick} style={{ "background-color": "red" }}>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" style={{ "aspect-ratio": "1" }} src={product.img} />
      </A>
    </Card>
  );
}
