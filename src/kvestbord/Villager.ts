import * as THREE from 'three';
import { Entity } from '../core/Entity';

let i = 0;

class Villager extends Entity {
	constructor() {
		super();

		this.mesh = new THREE.Mesh(
			new THREE.BoxGeometry(1, 1, 1),
			new THREE.MeshNormalMaterial()
		);
	}

	update(step: number) {
		i += step;
		this.mesh.position.x = Math.sin(i / 5);
		this.mesh.position.z = Math.sin(i / 15);
	}
}

export { Villager };
