import { defineComponent } from 'vue'
import { component as Viewer } from 'v-viewer'

// {
//   "diagramData": {
//     "head": {
//       "version": "2.0.0"
//     },
//     "body": [
//       {
//         "type": "text",
//         "html": "<div style=\"text-align:center;\"><span style=\"font-weight:bold; font-size:48px;\">这里是一个画板，可以干嘛呢？</span></div><div style=\"text-align:center;\"><br></div>",
//         "id": "b00d0b5c-4add-429b-a751-715cb6c13d86",
//         "x": -761,
//         "y": 223,
//         "zIndex": 0,
//         "width": 645,
//         "height": 436.921875,
//         "rotate": 0
//       },
//       {
//         "type": "geometry",
//         "html": "<div style=\"text-align:center;\">&nbsp;</div>",
//         "shape": "display",
//         "id": "b0e8babe-a7df-4e0e-b1f5-a8df6b6b0d31",
//         "x": -633,
//         "y": 730,
//         "width": 144,
//         "height": 79.4609375,
//         "zIndex": 1,
//         "rotate": 0
//       },
//       {
//         "type": "image",
//         "image": {
//           "src": "https://cdn.nlark.com/yuque/0/2021/jpeg/2596791/1630397453886-7fddd515-9668-4e5d-9ddf-9713acb533ec.jpeg",
//           "naturalWidth": 1920,
//           "naturalHeight": 1080,
//           "uploadInfo": {
//             "hash": "aa5abc3a927f7291283bc6ca96e8d626efd34ef08ce182b11a5aad5394d531c4",
//             "fileName": "1235.jpg",
//             "fileType": "image/jpeg",
//             "fileSize": 454645,
//             "localTempSrc": "blob:https://www.yuque.com/95663219-b912-405d-8078-2d57048a9200",
//             "state": -2
//           }
//         },
//         "width": 1000,
//         "height": 562.5,
//         "x": -63,
//         "y": 355,
//         "constraints": {
//           "proportion": true
//         },
//         "id": "b962e618-cd7e-4534-abc3-c4dba2314ea4",
//         "zIndex": 2
//       },
//       {
//         "type": "line",
//         "shape": "elbow",
//         "source": {
//           "id": "b0e8babe-a7df-4e0e-b1f5-a8df6b6b0d31",
//           "connection": "E"
//         },
//         "target": {
//           "marker": "arrow",
//           "id": "b962e618-cd7e-4534-abc3-c4dba2314ea4"
//         },
//         "id": "14c3c356-dc30-4cfa-950e-1e94a9ec9dc6",
//         "zIndex": 3
//       },
//       {
//         "id": "8b6d2746-7508-4091-9d84-563a0e161d7c",
//         "x": -618,
//         "y": 593,
//         "html": "<span style=\"color:rgb(38, 38, 38);\">思维导图</span>",
//         "border": {
//           "fill": "rgb(250, 250, 250)"
//         },
//         "type": "mindmap",
//         "children": [
//           {
//             "layout": {
//               "quadrant": 1
//             },
//             "treeEdge": {
//               "stroke": "#A287E1"
//             },
//             "id": "adf9d596-63fd-439f-b878-c71475fcae93",
//             "children": [],
//             "zIndex": 5,
//             "html": "我是谁"
//           },
//           {
//             "html": "从哪里来？",
//             "layout": {
//               "quadrant": 1
//             },
//             "treeEdge": {
//               "stroke": "#6F81DB"
//             },
//             "id": "2272e2f4-8e6c-4ecf-9832-b8f9863d71ad",
//             "children": [],
//             "zIndex": 7
//           },
//           {
//             "html": "到哪里去？",
//             "layout": {
//               "quadrant": 1
//             },
//             "treeEdge": {
//               "stroke": "#6EC4C4"
//             },
//             "id": "dea9f3ed-51b5-4ca1-9133-239480536fa9",
//             "children": [],
//             "zIndex": 6
//           },
//           {
//             "html": "还有多久",
//             "layout": {
//               "quadrant": 1
//             },
//             "treeEdge": {
//               "stroke": "#DFB85D"
//             },
//             "id": "3a288653-a135-4979-b7b8-3329b79ddc8b",
//             "children": [],
//             "zIndex": 4
//           }
//         ],
//         "zIndex": 8
//       }
//     ]
//   },
//   "viewportSetting": {
//     "zoom": 1,
//     "tlCanvasPoint": [
//       -374,
//       224.578125,
//       1
//     ],
//     "width": 764,
//     "height": 739.671875
//   },
//   "search": "这里是一个画板，可以干嘛呢？ 思维导图我是谁从哪里来？到哪里去？还有多久",
//   "src": "https://cdn.nlark.com/yuque/0/2021/jpeg/2596791/1630397542933-8a0c6046-43f6-46a3-92b1-701d69c1a7dc.jpeg",
//   "__height": 721.671875,
//   "__spacing": "both",
//   "id": "uXOHt",
//   "margin": {
//     "top": true,
//     "bottom": true
//   },
//   "height": 721.671875
// }

export default defineComponent({
  name: 'BoardCard',

  components: {
    Viewer
  },

  props: ['meta'],

  setup({ meta }) {
    //console.log('meta => ', meta)

    const { src, height } = meta

    const options = {
      inline: true,
      button: false,
      navbar: false,
      title: false,
      toolbar: false,
      tooltip: false,
      movable: true,
      zoomable: true,
      rotatable: false,
      scalable: false,
      transition: false,
      fullscreen: true,
      keyboard: false,
      url: 'data-source'
    }

    return () => (
      <div class="border my-2 p-4 w-full" style={{ height: `${height ?? 500}px` }}>
        <Viewer options={options} images={[src]}>
          <img src={src} key={src} data-source={src} style={{ display: 'none' }} />
        </Viewer>
      </div>
    )
  }
})
