import * as THREE from 'three';
import { Group } from './Group';
import { Loop } from './Loop';

let domElement: HTMLElement;
let camera: THREE.PerspectiveCamera;
let scene: THREE.Scene;
let renderer: THREE.WebGLRenderer;
let entities: Group;

let loop: Loop;

class Game {
	constructor(container: HTMLElement) {
		domElement = container;

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(60);
		renderer = new THREE.WebGLRenderer({ antialias: false });

		entities = new Group();
		scene.add(entities);

		domElement.appendChild(renderer.domElement);
		camera.position.set(4, 4, 4);
		camera.lookAt(new THREE.Vector3());

		scene.add(new THREE.AxesHelper());

		loop = new Loop({
			update: this.update.bind(this),
			render: this.render.bind(this),
		});

		this.resize = this.resize.bind(this);

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

	resize() {
		const { width, height } = domElement.getBoundingClientRect();

		renderer.setSize(width, height);
		camera.aspect = width / height;
		camera.updateProjectionMatrix();
	}

	start() {
		loop.start();
	}

	stop() {
		loop.stop();
	}

	update(step: number) {
		entities.update(step);
	}

	render() {
		entities.render();

		renderer.render(scene, camera);
	}
}

export { Game, camera, scene, entities };
