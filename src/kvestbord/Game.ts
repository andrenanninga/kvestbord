import * as THREE from 'three';
import { Game, entities } from '../';
import { Villager } from './Villager';

class Kvestbord extends Game {
	constructor(domElement: HTMLElement) {
		super(domElement);

		this.start();

		const villager = new Villager();
		entities.add(villager);
	}
}

export { Kvestbord };
