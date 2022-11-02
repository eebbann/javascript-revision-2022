function Stopwatch(){
	let startTime, endTime, running, duration = 0;

	this.start = function(){
		if (running)
		throw new Error('Stopwatch is already running');

		running = true;

		startTime = new Date()
	};

	 
}

const stop = new Stopwatch();

console.log(stop.start());