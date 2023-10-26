import { supabase } from "./supabaseClient";

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

export async function testGetAllItems(): Promise<shopItem[]> {
  return new Promise<shopItem[]>(async (resolve, reject) => {
    try {
      const { data, error, status } = await supabase.from('shop_items')
        .select('id, name, price_usd, img, description');

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        data.forEach(({ id, price_usd, img, description }, index) => {
          console.log("YES IT WORKED OR SOMETHING", id)
        })
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    }
  })
}
