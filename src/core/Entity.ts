import * as THREE from 'three';

class Entity {
	public mesh: THREE.Object3D;

	constructor() {
		this.mesh = new THREE.Object3D();
	}

	attach(parent: THREE.Object3D) {
		parent.add(this.mesh);
	}

	update(step: number) {}

	render() {}
}

class MeshEntity {
	public mesh: THREE.Object3D;
	public parent: THREE.Object3D;

	constructor(parent: THREE.Object3D) {
		this.parent = parent;
	}
}

export { Entity };
