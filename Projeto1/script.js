import * as THREE from 'three'; 
console.log("Three carregado:", THREE);

const scene = new THREE.Scene();

// ============= GRUPO ==============

const grupo= new THREE.Group()

console.log("Cena criada:", scene);
const formaCubo = new THREE.BoxGeometry(1 ,1 ,1);
const material =new THREE.MeshBasicMaterial(
    { color: "pink"}
)
const cubo = new THREE.Mesh(formaCubo, material);

cubo.position.z=1;

// ============== FORMA 2 ==============

const formaCubo2 = new THREE.BoxGeometry(1,1,1);
const material2= new THREE.MeshBasicMaterial(
    {color: "blue"}
)
const cubo2= new THREE.Mesh(formaCubo2, material2);
cubo2.position.y=2;

grupo.add(cubo,cubo2);

scene.add(grupo)
grupo.position.z=-2;
grupo.position.x=2;

// ============== Helper ===============
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);


// ============== CÂMERA ===============

const aspect ={
    width:window.innerWidth,
    height:window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height,1,2000)
camera.position.z = 6
camera.position.x =2
camera.position.y = 1
scene.add(camera)

const canvas = document.querySelector(".desenho")
const renderizador= new THREE.WebGLRenderer({canvas})
renderizador.setSize(aspect.width, aspect.height);
renderizador.render(scene,camera)