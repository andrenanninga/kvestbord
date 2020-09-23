import { Entity } from '../Entity';
import { camera } from '../Game';

class BillboardEntity extends Entity {
	constructor() {
		super();
	}

	render() {
		this.setRotationFromQuaternion(camera.quaternion);
	}
}

export { BillboardEntity };
