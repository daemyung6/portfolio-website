import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { gsap } from "gsap";

const scene = new THREE.Scene()
var clock = new THREE.Clock();
scene.background = new THREE.Color(0xcfe0ff);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
window.camera = camera
camera.position.set(
    0, 0, 0
)



const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x080820, 3 );
scene.add(hemiLight);

const renderer = new THREE.WebGLRenderer({
    antialias: true
})

function fixCameraOnResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}
fixCameraOnResize()
window.addEventListener('resize', fixCameraOnResize)



const leftPageOutter = document.querySelector('.root .left-page-outter')
const shoesPageDiv = document.querySelector('.page.shoes')
const detailDiv1 = document.querySelector('.page.shoes-detail-1')
const detailDiv2 = document.querySelector('.page.shoes-detail-2')

window.addEventListener('scroll', () => {
    if (leftPageOutter.offsetTop > window.scrollY) {
        renderer.domElement.style.position = 'absolute'
    }
    else if (
        (leftPageOutter.offsetTop <= window.scrollY) &&
        (
            window.scrollY <=
            detailDiv2.offsetTop
        )
    ) {
        renderer.domElement.style.position = 'fixed'
        renderer.domElement.style.top = '0px'
    }
    else {
        renderer.domElement.style.position = 'fixed'
        renderer.domElement.style.top = `${detailDiv2.offsetTop - window.scrollY}px`
    }
})



shoesPageDiv.appendChild( renderer.domElement )

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

/**
 * @type {THREE.Scene}
 */
let shoesObj;
let isLoaded = false;
const loader = new GLTFLoader();
loader.load( './assets/glb/shoes4.glb?ver=1.0.0', 
    function ( item ) {
        shoesObj = item.scene
        window.test = shoesObj

        shoesObj.scale.x = 0
        shoesObj.scale.y = 0
        shoesObj.scale.z = 0

        item.scene.position.x = 0.04
        item.scene.position.y = -0.1
        item.scene.position.z = -1.5

        scene.add( item.scene )
        isLoaded = true
    }, 
    undefined, 
    function ( error ) {
        console.error( error );
    } 
)

function update() {
	requestAnimationFrame( update )
	renderer.render( scene, camera )
}
update()

const rightText = document.querySelector('.root .page.shoes .right-text')
const leftText = document.querySelector('.root .page.shoes .left-text')

const observeList = require('../index').observeList

let eventList = []

observeList.push({
    element: shoesPageDiv,
    onView: (e) => {
        let time = 0;
        eventList.push(
            setTimeout(() => {
                if(isLoaded) {
                    gsap.to(shoesObj.rotation, { duration: 1, x: 0 });
                    gsap.to(shoesObj.rotation, { duration: 1, y: Math.PI * 2 });
                    gsap.to(shoesObj.rotation, { duration: 1, z: 0 });

                    gsap.to(shoesObj.scale, { duration: 1, x: 1 });
                    gsap.to(shoesObj.scale, { duration: 1, y: 1 });
                    gsap.to(shoesObj.scale, { duration: 1, z: 1 });

                    gsap.to(shoesObj.position, { duration: 1, x: 0.04 });
                    gsap.to(shoesObj.position, { duration: 1, y: -0.1 });
                    gsap.to(shoesObj.position, { duration: 1, z: -1.5 });
                }
            },
                time * 50
            ))
        time++

        eventList.push(
            setTimeout(() => {
                rightText.classList.add('active')
                leftText.classList.add('active')
            },
                time * 50
        ))
        time++
    },
    onOut: (e) => {
        
        if (window.scrollY < shoesPageDiv.offsetTop) {
            console.log(234)
            shoesObj.scale.x = 0
            shoesObj.scale.y = 0
            shoesObj.scale.z = 0

            shoesObj.position.x = 0.04
            shoesObj.position.y = -0.1
            shoesObj.position.z = -1.5

            shoesObj.rotation.x = 0
            shoesObj.rotation.y = 0
            shoesObj.rotation.z = 0
    
            for (let i = 0; i < eventList.length; i++) {
                clearTimeout(eventList[i])
            }
            eventList = []
            rightText.classList.remove('active')
            leftText.classList.remove('active')
        }

    },
})

window.test = shoesObj
observeList.push({
    element: detailDiv1,
    onView: (e) => {
        let time = 0;
        eventList.push(
            setTimeout(() => {
                if(isLoaded) {
                    gsap.to(shoesObj.rotation, { duration: 1, x: 1.4 });
                    gsap.to(shoesObj.rotation, { duration: 1, y: 3.97 });
                    gsap.to(shoesObj.rotation, { duration: 1, z: 0 });

                    gsap.to(shoesObj.position, { duration: 1, x: -0.6 });
                    gsap.to(shoesObj.position, { duration: 1, y: -0.1 });
                    gsap.to(shoesObj.position, { duration: 1, z: -1.5 });

                    gsap.to(shoesObj.scale, { duration: 1, x: 1 });
                    gsap.to(shoesObj.scale, { duration: 1, y: 1 });
                    gsap.to(shoesObj.scale, { duration: 1, z: 1 });
                }
            },
                time * 50
            ))
        time++

    },
    onOut: (e) => {

    },
})

observeList.push({
    element: detailDiv1,
    onView: (e) => {
        let time = 0;
        eventList.push(
            setTimeout(() => {
                if(isLoaded) {
                    gsap.to(shoesObj.rotation, { duration: 1, x: 1.4 });
                    gsap.to(shoesObj.rotation, { duration: 1, y: 3.97 });
                    gsap.to(shoesObj.rotation, { duration: 1, z: 0 });

                    gsap.to(shoesObj.position, { duration: 1, x: -0.6 });
                    gsap.to(shoesObj.position, { duration: 1, y: -0.1 });
                    gsap.to(shoesObj.position, { duration: 1, z: -1.5 });

                    gsap.to(shoesObj.scale, { duration: 1, x: 1 });
                    gsap.to(shoesObj.scale, { duration: 1, y: 1 });
                    gsap.to(shoesObj.scale, { duration: 1, z: 1 });
                }
            },
                time * 50
            ))
        time++

    },
    onOut: (e) => {

    },
})

observeList.push({
    element: detailDiv2,
    onView: (e) => {
        let time = 0;
        eventList.push(
            setTimeout(() => {
                if(isLoaded) {
                    gsap.to(shoesObj.rotation, { duration: 1, x: 1.4 });
                    gsap.to(shoesObj.rotation, { duration: 1, y: 3.97 });
                    gsap.to(shoesObj.rotation, { duration: 1, z: 0 });

                    gsap.to(shoesObj.position, { duration: 1, x: 0.6 });
                    gsap.to(shoesObj.position, { duration: 1, y: -0.1 });
                    gsap.to(shoesObj.position, { duration: 1, z: -1.5 });
                }
            },
                time * 50
            ))
        time++

    },
    onOut: (e) => {

    },
})