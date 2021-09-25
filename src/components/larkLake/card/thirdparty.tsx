import { defineComponent } from 'vue'

// {
//   "entrance": "bilibili",
//   "src": "https://player.bilibili.com/player.html?aid=55895675",
//   "url": "https://player.bilibili.com/player.html?aid=55895675",
//   "type": "bilibili",
//   "height": 123, // custom height
//   "id": "Divze",
//   "margin": {
//     "top": true,
//     "bottom": true
//   }
// }

const defaultheight = 500
const heightMaps: Record<string, number> = {
  music163: 88
}

export default defineComponent({
  name: 'ThirdPartyCard',

  props: ['meta'],

  setup({ meta }) {
    // console.log('meta => ', meta)
    const { entrance } = meta
    const height = meta.height ?? heightMaps[entrance] ?? defaultheight

    return () => (
      <div class="my-4 w-full">
        <iframe
          src={meta.url}
          frameborder="0"
          class="w-full h-full"
          style={{ height: `${height}px` }}
        />
      </div>
    )
  }
})
