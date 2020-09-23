import * as THREE from 'three';
import { Game, entities } from '../';
import { Landscape } from './Landscape';
import { Villager } from './Villager';

class Kvestbord extends Game {
	constructor(domElement: HTMLElement) {
		super(domElement);

		this.start();

		const landscape = new Landscape();
		entities.add(landscape);
	}
}

export { Kvestbord };
