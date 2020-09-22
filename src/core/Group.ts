import { Entity } from './Entity';

class Group extends Entity {
	static isGroup(entity: Entity): entity is Group {
		return entity.type === 'group';
	}

	constructor() {
		super();

		this.type = 'group';
	}

	add(...entities: Entity[]): this {
		super.add(...entities);

		return this;
	}

	remove(...entities: Entity[]): this {
		super.remove(...entities);

		return this;
	}

	update(step: number) {
		const amount = this.children.length;

		for (let i = 0; i < amount; i++) {
			(this.children[i] as Entity).update(step);
		}
	}

	render() {
		const amount = this.children.length;

		for (let i = 0; i < amount; i++) {
			(this.children[i] as Entity).render();
		}
	}
}

export { Group };
