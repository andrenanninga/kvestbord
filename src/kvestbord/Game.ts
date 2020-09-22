import * as THREE from 'three';
import { Game, Group } from '../';
import { Villager } from './Villager';

class Kvestbord extends Game {
	constructor(domElement: HTMLElement) {
		super(domElement);

		this.start();

		const villager = new Villager();
		this.entities.add(villager);
	}
}

export { Kvestbord };
