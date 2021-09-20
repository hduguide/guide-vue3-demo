import { defineComponent } from 'vue'

const lakeIconMap: Record<string, string> = {
  doc: 'https://gw.alipayobjects.com/zos/bmw-prod/11d695b4-30c1-478f-940a-e20095ccb2fe.svg'
}

export default defineComponent({
  name: 'LakeIcon',

  props: ['icon'],

  setup({ icon }) {
    const url = lakeIconMap[icon] || lakeIconMap['doc']

    return () => (
      <span
        class="inline-block"
        style={{
          backgroundImage: `url(${url})`,
          width: '24px',
          height: '24px'
        }}
      ></span>
    )
  }
})
