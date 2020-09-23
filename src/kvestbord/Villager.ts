import * as THREE from 'three';
import { BillboardEntity } from '../core/entities/Billboard';
import { Entity } from '../core/Entity';

let i = 0;

class Villager extends BillboardEntity {
	constructor() {
		super();

		this.add(
			new THREE.Mesh(
				new THREE.BoxGeometry(1, 1, 1),
				new THREE.MeshNormalMaterial()
			)
		);
	}

	update(step: number) {
		i += step;
		this.position.x = Math.sin(i / 15);
		this.position.z = Math.sin(i / 50);
	}
}

export { Villager };
