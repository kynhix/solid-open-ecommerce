
export const debugItems: Array<shopItem> = [
  {
    name: "Test item",
    id: 0,
    img: "https://factorio.com/static/img/factorio-wheel.png",
    price: 1337,
    description: "This is one of the test items",
  },
  {
    name: "BLAH BLAH",
    id: 1,
    img: "https://w7.pngwing.com/pngs/507/949/png-transparent-left-4-dead-2-xbox-360-portal-video-game-left-4-dead-game-hand-logo-thumbnail.png",
    price: 666,
    description: "This is another testie",
  },
]

export type shopItem = {
  name: string,
  id: number,
  img: string,
  price: number,
  description: string,
}
