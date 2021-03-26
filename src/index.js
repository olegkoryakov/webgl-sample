import * as BABYLON from 'babylonjs'

const canvas = document.querySelector('.canvas');
canvas.style.width = `${window.innerWidth}px`
canvas.style.height = `${window.innerHeight}px`

const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });

const createScene = function () {

  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera(
    'camera',
    -(Math.PI / 2),
    0,
    20,
    new BABYLON.Vector3(0, 0, 0),
    scene
  );

  camera.attachControl(canvas, true)

  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(1, 1, -1), scene)
  light.intensity = 0.7

  const tetrahedronVertexes = [
    [0, 3, 0],
    [1.5, 0, 1.5],
    [-1.5, 0, 1.5],
    [0, 0, -1.5]
  ]

  const hexagonalVertexes = [
    [1.5, 3, 1.5],
    [-1.5, 3, 1.5],
    [-1.5, 3, -1.5],
    [1.5, 3, -1.5],
    [1.5, 0, 1.5],
    [-1.5, 0, 1.5],
    [-1.5, 0, -1.5],
    [1.5, 0, -1.5]
  ]

  const octaederVertexes = [
    [0, 0, 0],
    [1.5, 1.5, 0],
    [0, 3, 0],
    [-1.5, 1.5, 0],
    [0, 1.5, -1.5],
    [0, 1.5, 1.5]
  ]

  const tetrahedronOptions = {
    name: 'tetrahedron',
    category: ['Prism'],
    vertex: tetrahedronVertexes,
    face: [
      [1, 0, 2],
      [2, 0, 3],
      [3, 0, 1],
      [1, 2, 3]
    ]
  }

  const hexagonalOptions = {
    name: 'hexagonal',
    category: ['Prism'],
    vertex: hexagonalVertexes,
    face: [
      [7, 6, 2, 3],
      [7, 3, 0, 4],
      [4, 0, 1, 5],
      [5, 1, 2, 6],
      [4, 5, 6, 7],
      [3, 2, 1, 0]
    ]
  }

  const octaederOptions = {
    name: 'octaeder',
    updateable: true,
    category: ['Prism'],
    vertex: octaederVertexes,
    face: [
      [0, 1, 5],
      [0, 5, 3],
      [0, 3, 4],
      [0, 4, 1],
      [1, 4, 2],
      [1, 2, 5],
      [3, 5, 2],
      [3, 2, 4]

    ]
  }
  // тетраедр
  const tetrahedron = new BABYLON.MeshBuilder.CreatePolyhedron(
    'tetrahedron',
    {
      custom: tetrahedronOptions
    }
  )

  // гексаэдр
  const hexagonal = new BABYLON.MeshBuilder.CreatePolyhedron(
    'hexagonal',
    {
      custom: hexagonalOptions
    },
  )

  // октаэдр
  const octaeder = new BABYLON.MeshBuilder.CreatePolyhedron(
    'octaeder',
    {
      custom: octaederOptions
    },
    scene
  )


  const octaederLines = [
    // 1
    [
      new BABYLON.Vector3(...octaederVertexes[0]),
      new BABYLON.Vector3(...octaederVertexes[1])
    ],
    // 2
    [
      new BABYLON.Vector3(...octaederVertexes[1]),
      new BABYLON.Vector3(...octaederVertexes[2])
    ],
    // 3
    [
      new BABYLON.Vector3(...octaederVertexes[2]),
      new BABYLON.Vector3(...octaederVertexes[3])
    ],
    // 4
    [
      new BABYLON.Vector3(...octaederVertexes[3]),
      new BABYLON.Vector3(...octaederVertexes[0])
    ],
    // 5
    [
      new BABYLON.Vector3(...octaederVertexes[0]),
      new BABYLON.Vector3(...octaederVertexes[5])
    ],
    // 6
    [
      new BABYLON.Vector3(...octaederVertexes[5]),
      new BABYLON.Vector3(...octaederVertexes[1])
    ],
    // 7
    [
      new BABYLON.Vector3(...octaederVertexes[1]),
      new BABYLON.Vector3(...octaederVertexes[4])
    ],
    // 8
    [
      new BABYLON.Vector3(...octaederVertexes[4]),
      new BABYLON.Vector3(...octaederVertexes[3])
    ],
    // 9
    [
      new BABYLON.Vector3(...octaederVertexes[3]),
      new BABYLON.Vector3(...octaederVertexes[5])
    ],
    // 10
    [
      new BABYLON.Vector3(...octaederVertexes[5]),
      new BABYLON.Vector3(...octaederVertexes[2])
    ],
    // 11
    [
      new BABYLON.Vector3(...octaederVertexes[2]),
      new BABYLON.Vector3(...octaederVertexes[4])
    ],
    // 12
    [
      new BABYLON.Vector3(...octaederVertexes[4]),
      new BABYLON.Vector3(...octaederVertexes[0])
    ]
  ]

  const hexagonalLines = [
    // 1
    [
      new BABYLON.Vector3(...hexagonalVertexes[0]),
      new BABYLON.Vector3(...hexagonalVertexes[1])
    ],
    // 2
    [
      new BABYLON.Vector3(...hexagonalVertexes[1]),
      new BABYLON.Vector3(...hexagonalVertexes[2])
    ],
    // 3
    [
      new BABYLON.Vector3(...hexagonalVertexes[2]),
      new BABYLON.Vector3(...hexagonalVertexes[3])
    ],
    // 4
    [
      new BABYLON.Vector3(...hexagonalVertexes[3]),
      new BABYLON.Vector3(...hexagonalVertexes[7])
    ],
    // 5
    [
      new BABYLON.Vector3(...hexagonalVertexes[7]),
      new BABYLON.Vector3(...hexagonalVertexes[6])
    ],
    // 6
    [
      new BABYLON.Vector3(...hexagonalVertexes[6]),
      new BABYLON.Vector3(...hexagonalVertexes[5])
    ],
    // 7
    [
      new BABYLON.Vector3(...hexagonalVertexes[1]),
      new BABYLON.Vector3(...hexagonalVertexes[5])
    ],
    // 8
    [
      new BABYLON.Vector3(...hexagonalVertexes[0]),
      new BABYLON.Vector3(...hexagonalVertexes[4])
    ],
    // 9
    [
      new BABYLON.Vector3(...hexagonalVertexes[4]),
      new BABYLON.Vector3(...hexagonalVertexes[7])
    ],
    // 9
    [
      new BABYLON.Vector3(...hexagonalVertexes[0]),
      new BABYLON.Vector3(...hexagonalVertexes[3])
    ],
    // 10
    [
      new BABYLON.Vector3(...hexagonalVertexes[2]),
      new BABYLON.Vector3(...hexagonalVertexes[6])
    ],
    // 11
    [
      new BABYLON.Vector3(...hexagonalVertexes[5]),
      new BABYLON.Vector3(...hexagonalVertexes[4])
    ]
  ]

  const tetrahedronLines = [
    // 1
    [
      new BABYLON.Vector3(...tetrahedronVertexes[0]),
      new BABYLON.Vector3(...tetrahedronVertexes[1])
    ],
    // 2
    [
      new BABYLON.Vector3(...tetrahedronVertexes[1]),
      new BABYLON.Vector3(...tetrahedronVertexes[3])
    ],
    // 3
    [
      new BABYLON.Vector3(...tetrahedronVertexes[3]),
      new BABYLON.Vector3(...tetrahedronVertexes[2])
    ],
    // 4
    [
      new BABYLON.Vector3(...tetrahedronVertexes[2]),
      new BABYLON.Vector3(...tetrahedronVertexes[1])
    ],
    // 5
    [
      new BABYLON.Vector3(...tetrahedronVertexes[0]),
      new BABYLON.Vector3(...tetrahedronVertexes[2])
    ],
    // 6
    [
      new BABYLON.Vector3(...tetrahedronVertexes[0]),
      new BABYLON.Vector3(...tetrahedronVertexes[3])
    ]
  ]

  const octaederCascade = BABYLON.MeshBuilder.CreateLineSystem(
    'octaedeCascade',
    {
      lines: octaederLines
    },
    scene
  )

  const tetrahedronCascade = BABYLON.MeshBuilder.CreateLineSystem(
    'tetrahedronCascade',
    {
      lines: tetrahedronLines
    },
    scene
  )

  const hexagonalCascade = BABYLON.MeshBuilder.CreateLineSystem(
    'hexagonalCascade',
    {
      lines: hexagonalLines
    },
    scene
  )

  hexagonalCascade.visibility = 0
  octaederCascade.visibility = 0
  tetrahedronCascade.visibility = 0

  tetrahedron.position.x = -7
  octaeder.position.x = 7

  octaederCascade.position.x = 7
  tetrahedronCascade.position.x = - 7
  const SPACE_CODE = 32

  scene.onKeyboardObservable.add(({ type, event }) => {
    switch (type) {
      case BABYLON.KeyboardEventTypes.KEYDOWN:
        console.log(event.keyCode)
        switch (event.keyCode) {
          case (SPACE_CODE):
            octaeder.visibility = octaeder.visibility === 1 ? 0 : 1
            octaederCascade.visibility = octaederCascade.visibility === 1 ? 0 : 1

            hexagonal.visibility = hexagonal.visibility === 1 ? 0 : 1
            hexagonalCascade.visibility = hexagonalCascade.visibility === 1 ? 0 : 1

            tetrahedron.visibility = tetrahedron.visibility === 1 ? 0 : 1
            tetrahedronCascade.visibility = tetrahedronCascade.visibility === 1 ? 0 : 1
            break
        }
    }
  })

  return scene;
}
// call the createScene function
const scene = createScene();
// run the render loop
engine.runRenderLoop(function () {
  scene.render();
});
// the canvas/window resize event handler
window.addEventListener('resize', function () {
  canvas.style.width = `${window.innerWidth}px`
  canvas.style.height = `${window.innerHeight}px`
  engine.resize();
});