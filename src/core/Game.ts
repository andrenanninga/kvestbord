import * as THREE from 'three';
import { Entity } from './Entity';
import { Group } from './Group';
import { Loop } from './Loop';

class Game {
	public readonly domElement: HTMLElement;
	public readonly scene: THREE.Scene;
	public readonly camera: THREE.PerspectiveCamera;
	public readonly renderer: THREE.WebGLRenderer;

	public readonly entities: Group;

	private loop: Loop;

	constructor(domElement: HTMLElement) {
		this.domElement = domElement;

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(60);
		this.renderer = new THREE.WebGLRenderer({ antialias: false });

		this.entities = new Group();
		this.scene.add(this.entities);

		this.domElement.appendChild(this.renderer.domElement);
		this.camera.position.set(4, 4, 4);
		this.camera.lookAt(new THREE.Vector3());

		this.scene.add(new THREE.AxesHelper());

		this.loop = new Loop({
			update: this.update.bind(this),
			render: this.render.bind(this),
		});

		this.resize();
	}

	resize() {
		const { width, height } = this.domElement.getBoundingClientRect();

		this.renderer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
	}

	start() {
		this.loop.start();
	}

	stop() {
		this.loop.stop();
	}

	update(step: number) {
		this.entities.update(step);
	}

	render() {
		this.entities.render();

		this.renderer.render(this.scene, this.camera);
	}
}

export { Game };
