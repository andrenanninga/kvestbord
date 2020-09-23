import * as THREE from 'three';
import { Entity } from '../core/Entity';
import { pointer } from '../core/Game';

class Landscape extends Entity {
	private mesh: THREE.Mesh;

	private here: THREE.Mesh;

	constructor() {
		super();

		this.mesh = new THREE.Mesh(
			new THREE.PlaneGeometry(40, 40, 40, 40),
			new THREE.MeshNormalMaterial({ wireframe: true })
		);
		this.mesh.rotation.x = Math.PI / -2;
		this.add(this.mesh);

		this.here = new THREE.Mesh(
			new THREE.BoxGeometry(1, 0.1, 1),
			new THREE.MeshNormalMaterial()
		);
		this.add(this.here);
	}

	render() {
		const intersections = pointer.intersectObject(this.mesh);
		if (intersections.length > 0) {
			this.here.position.set(
				Math.round(intersections[0].point.x + 0.5) - 0.5,
				0,
				Math.round(intersections[0].point.z + 0.5) - 0.5
			);
		}
	}
}

export { Landscape };
