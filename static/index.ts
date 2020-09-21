import { Kvestbord } from '../src/kvestbord/Game';

const domElement = document.getElementById('container');

if (!domElement) {
	throw new Error('Could not find element #container');
}

const game = new Kvestbord(domElement);

// @ts-ignore
window.game = game;
