import { defineComponent } from 'vue'

import hljs from 'highlight.js'

import 'highlight.js/styles/base16/darcula.css'

// {
//   "mode": "cpp",
//   "code": "#include <iostream>\n\nusing namespace std;\n\n/**\n * Say Hello to the world\n */\nint main(){\n\tcout << \"Hello, world\" << endl;\n  \treturn 0;\n}",
//   "autoWrap": false,
//   "theme": "default",
//   "__spacing": "both",
//   "heightLimit": true,
//   "id": "GOL5a",
//   "margin": {
//     "top": true,
//     "bottom": true
//   }
// }

export default defineComponent({
  name: 'codeblock',

  props: ['meta'],

  setup({ meta }) {
    const { mode, code } = meta
    const res = hljs.highlight(code, { language: mode })

    console.log(code.split('\n'))

    const addLineNumbers = (html: string) => {
      let num = 1
      html = '<span class="ln-num" data-num="' + num + '"></span>' + html
      html = html.replace(/\r\n|\n/g, function (a) {
        num++
        return a + '<span class="ln-num" data-num="' + num + '"></span>'
      })
      html = '<span class="ln-bg"></span>' + html
      return html
    }

    const htmlRes = addLineNumbers(res.value)

    return () => (
      <div class="border flex flex-col">
        <div class="flex flex-row justify-end pr-2 space-x-2">
          <div>{mode}</div>
          <div>
            <button>copy</button>
          </div>
        </div>
        <div class="w-full flex-1 text-sm py-1 pb-2 overflow-hidden">
          <pre lang={mode} class="overflow-ellipsis">
            <code class="hljsln" innerHTML={htmlRes}></code>
          </pre>
        </div>
      </div>
    )
  }
})
