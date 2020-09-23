import * as THREE from 'three';
import { camera, domElement, pane } from './Game';

class Pointer {
	public readonly position: THREE.Vector2;

	private bounds: DOMRect;
	private raycaster: THREE.Raycaster;

	constructor() {
		this.position = new THREE.Vector2(0, 0);

		this.bounds = domElement.getBoundingClientRect();
		this.raycaster = new THREE.Raycaster();

		document.addEventListener('pointermove', this.updatePosition, false);
		window.addEventListener('resize', this.updateBounds);

		pane.addMonitor(this.position, 'x');
		pane.addMonitor(this.position, 'y');
	}

	private updateBounds = () => {
		this.bounds = domElement.getBoundingClientRect();
		console.log(this.bounds);
	};

	private updatePosition = (event: MouseEvent) => {
		const x = ((event.clientX - this.bounds.left) / this.bounds.width) * 2 - 1;
		const y = -((event.clientY - this.bounds.top) / this.bounds.height) * 2 + 1;

		this.position.set(x, y);
	};

	intersectObject(object: THREE.Object3D) {
		return this.raycaster.intersectObject(object);
	}

	update() {
		this.raycaster.setFromCamera(this.position, camera);
	}
}

export { Pointer };
