import { Game } from '../';
import { Villager } from './Villager';

class Kvestbord extends Game {
	constructor(domElement: HTMLElement) {
		super(domElement);

		this.start();

		const villager = new Villager();
		this.entities.push(villager);
		this.scene.add(villager.mesh);
	}
}

export { Kvestbord };
