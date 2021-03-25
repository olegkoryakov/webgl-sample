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

  // const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene)
  const tetrahedronOptions = {
    name: 'tetrahedron',
    category: ['Prism'],
    vertex: [
      [0, 3, 0],
      [1.5, 0, 1],
      [-1.5, 0, 1],
      [0, 0, -2]
    ],
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
    vertex: [
      [1.5, 3, 1.5],
      [-1.5, 3, 1.5],
      [-1.5, 3, -1.5],
      [1.5, 3, -1.5],
      [1.5, 0, 1.5],
      [-1.5, 0, 1.5],
      [-1.5, 0, -1.5],
      [1.5, 0, -1.5],

    ],
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
    category: ['Prism'],
    vertex: [
      [0, 0, 0],
      [1.5, 1.5, 0],
      [0, 3, 0],
      [-1.5, 1.5, 0],
      [0, 1.5, -1.5],
      [0, 1.5, 1.5]
    ],
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
    }
  )

  tetrahedron.position.x = -7
  octaeder.position.x = 7

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