type LoopOptions = {
	update: (step: number) => void;
	render: () => void;
	fps?: number;
};

class Loop {
	public readonly fps: number;
	public isRunning: boolean = false;

	public update: (step: number) => void;
	public render: () => void;

	private accumulator = 0;
	private delta: number;
	private step: number;

	private animationRequest?: number;

	private last: number = 0;
	private now: number = 0;
	private dt: number = 0;

	constructor(options: LoopOptions) {
		const { fps = 60 } = options;

		this.update = options.update;
		this.render = options.render;

		this.fps = fps;
		this.delta = 1_000 / fps;
		this.step = 1 / fps;

		this.frame = this.frame.bind(this);
	}

	public start() {
		this.last = performance.now();
		this.isRunning = true;
		this.animationRequest = requestAnimationFrame(this.frame);
	}

	public stop() {
		this.isRunning = false;

		if (this.animationRequest) {
			cancelAnimationFrame(this.animationRequest);
		}
	}

	private frame() {
		this.animationRequest = requestAnimationFrame(this.frame);

		this.now = performance.now();
		this.dt = this.now = this.last;
		this.last = this.now;

		if (this.dt > 1_000) {
			return;
		}

		this.accumulator += this.dt;

		while (this.accumulator >= this.delta) {
			this.update(this.step);
			this.accumulator -= this.delta;
		}

		this.render();
	}
}

export { Loop };
