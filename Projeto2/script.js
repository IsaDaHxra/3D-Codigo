import * as THREE from 'three'

// Cena
const scene = new THREE.Scene();

// Forma
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial(
    {color: "purple"}
)
const mesh = new THREE.Mesh(geometry,material);

scene.add(mesh);

// Câmera
const aspect={
    width: window.innerWidth,
    height: window.innerHeight,
}
const camera= new THREE.PerspectiveCamera(75,aspect.width/aspect.height)
camera.position.z=3;
scene.add(camera);

// Render
const canvas= document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(aspect.width, aspect.height)

// Animação -- É realizada por frames, então varia de dispositivo para outro

// Clock serve pra ajustar essa variação
const clock= new THREE.Clock();
const animate = ()=>{
    const elapsedTime= clock.getElapsedTime()
    // Atualizar a rotação no eixo X
    mesh.rotation.x = elapsedTime * Math.PI * 2; // Isso proporciona a mesma animação pra todos os dispositivos

    // Renderizar
    renderer.render(scene,camera);

    // Pegar a animação
    window.requestAnimationFrame(animate);
}
animate();