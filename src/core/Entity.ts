import * as THREE from 'three';

class Entity extends THREE.Object3D {
	type: string;
	readonly isEntity = true;

	static isEntity(entity: Entity): entity is Entity {
		return entity.type === 'entity';
	}

	constructor() {
		super();

		this.type = 'entity';
	}

	update(step: number) {}

	render() {}
}

export { Entity };
