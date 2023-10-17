import { Card } from "solid-bootstrap";
import { A } from "solid-start";

type ShopProduct = {
  id: number,
  name: string,
  price: number,
  description: string,
  sizes?: string[],
}

export default function ShopItemCard(props: { product: ShopProduct }) {
  return (
    <Card style={{ width: '18rem', overflow: "hidden" }}>
      <A href="/" style={{ "background-color": "red" }}>
        <Card.Body>
          <Card.Title>{props.product.name}</Card.Title>
        </Card.Body>
        <Card.Img variant="bottom" style={{ "aspect-ratio": "1" }} src="https://pbs.twimg.com/profile_images/1294200194226171904/qOiiCE6c_400x400.png" />
      </A>
    </Card>
  );
}
