import * as THREE from 'three';
import { Entity } from './Entity';
import { Loop } from './Loop';

class Game {
	public readonly domElement: HTMLElement;
	public readonly scene: THREE.Scene;
	public readonly camera: THREE.PerspectiveCamera;
	public readonly renderer: THREE.WebGLRenderer;

	private loop: Loop;
	public entities: Entity[] = [];

	constructor(domElement: HTMLElement) {
		this.domElement = domElement;

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(60);
		this.renderer = new THREE.WebGLRenderer({ antialias: false });

		this.domElement.appendChild(this.renderer.domElement);
		this.camera.position.set(4, 4, 4);
		this.camera.lookAt(new THREE.Vector3());

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
		this.entities.forEach((entity) => entity.update(step));
	}

	render() {
		this.entities.forEach((entity) => entity.render());

		this.renderer.render(this.scene, this.camera);
	}
}

export { Game };
