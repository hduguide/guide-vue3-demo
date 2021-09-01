import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LakeCard',

  props: ['type', 'name', 'value'],

  render() {
    const meta = this.meta
    switch (this.name) {
      case 'image':
        return (
          <div>
            <img src={meta.src} alt={meta.name} />
          </div>
        )
    }
    return (
      <div>
        不支持的卡片 <code>{JSON.stringify(meta)}</code>
      </div>
    )
  },

  created() {
    let value = decodeURIComponent(this.value ?? '{}')
    if (value.startsWith('data:')) {
      value = value.substring(5)
    }
    const data = JSON.parse(value)
    // console.log('card => ', data)
    this.meta = data['data'] ?? data
  },

  data() {
    return {
      meta: {} as any
    }
  }
})
