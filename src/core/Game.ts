import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Tweakpane from 'tweakpane';
import { Group } from './Group';
import { Loop } from './Loop';
import { Pointer } from './Pointer';

let camera: THREE.PerspectiveCamera;
let domElement: HTMLElement;
let entities: Group;
let pointer: Pointer;
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let pane: Tweakpane;

let controls: OrbitControls;
let loop: Loop;

class Game {
	constructor(container: HTMLElement) {
		domElement = container;

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(60);
		renderer = new THREE.WebGLRenderer({ antialias: false });

		controls = new OrbitControls(camera, domElement);
		pane = new Tweakpane();

		entities = new Group();
		scene.add(entities);

		pointer = new Pointer();

		domElement.appendChild(renderer.domElement);
		camera.position.set(4, 4, 4);
		camera.lookAt(new THREE.Vector3());

		scene.add(new THREE.AxesHelper());

		loop = new Loop({
			update: this.update.bind(this),
			render: this.render.bind(this),
		});

		this.init();
	}

	init() {
		this.resize();

		window.addEventListener('resize', this.resize);
	}

	dispose() {
		window.removeEventListener('resize', this.resize);
		renderer.dispose();
	}

	resize = () => {
		const { width, height } = domElement.getBoundingClientRect();

		renderer.setSize(width, height);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	};

	start() {
		loop.start();
	}

	stop() {
		loop.stop();
	}

	update(step: number) {
		controls.update();
		pointer.update();
		entities.update(step);
	}

	render() {
		entities.render();

		renderer.render(scene, camera);
	}
}

export { camera, domElement, entities, Game, pane, pointer, scene };
