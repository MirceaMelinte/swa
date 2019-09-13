function Point(x, y) {
	function getX() {
		return x;
	};

	function getY() {
		return y;
	};

	function moveTo(x, y) {
		x = x;
		y = y;
	};

	function toString() {
		return `{ ${x}; ${y} }`;
	};

	function copy() {
		return Point(x, y);
	};

	return {
		getX: getX,
		getY: getY,
		moveTo: moveTo,
		toString: toString,
		copy: copy
	};
};

function Circle(...args) {
	function getCenter() {
		if (typeof args[2] === "undefined") {
			return args[0];
		}

		return Point(args[0], args[1]);
	};

	function getRadius() {
		if (typeof args[2] === "undefined") {
			return args[1];
		}

		return args[2];
	};

	function moveTo(x, y) {
		if (typeof args[2] === "undefined") {
			args[0].moveTo(x, y);
		}
	};

	function toString() {
		return typeof args[2] === "undefined"
			? `Radius: ${args[1]}; Center: { ${args[0].getX()}; ${args[0].getY()} }`
			: `Radius: ${args[2]}; Center: { ${args[0]}; ${args[1]} }`;
	};

	return {
		getCenter: getCenter,
		getRadius: getRadius,
		moveTo: moveTo,
		toString: toString
	};
};

let circles = [
	Circle(Point(1, 2), 5),
	Circle(Point(3, 4), 7),
	Circle(7, 8, 9)
];

let radiuses = circles.map(x => x.getRadius());
let centers = circles.map(x => x.getCenter().toString());

console.log(radiuses);
console.log(centers);