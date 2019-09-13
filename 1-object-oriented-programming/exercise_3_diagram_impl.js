function TextValue(val) {
	function value() {
		return val;
	}

	return {
		value: value
	};
}

function NumericValue(val, u) {
	function value() {
		return val;
	}

	function unit() {
		return u;
	}

	return {
		value: value,
		unit: unit
	};
}

function Data(typeValue, timeValue, placeValue) {
	function type() {
		return typeValue;
	}

	function timeValue() {
		return timeValue;
	}

	function placeValue() {
		return placeValue;
	}

	return {
		type: type,
		timeValue: timeValue,
		placeValue: placeValue
	};
}

function Temperature() {
	function convertToF() {
		console.log("Converted to F!");
	}

	function convertToC() {
		console.log("Converted to C!");
	}

	return {
		convertToF: convertToF,
		convertToC: convertToC
	};
}

function Precipitation(type) {
	function precipitationType() {
		return type;
	}

	function convertToInches() {
		console.log("Converted to inches!");
	}

	function convertToMM() {
		console.log("Converted to MM!");
	}

	return {
		precipitationType: precipitationType,
		convertToInches: convertToInches,
		convertToMM: convertToMM
	};
}

function Wind(dir) {
	function direction() {
		return dir;
	}

	function convertToMPH() {
		console.log("Converted to MPH!");
	}

	function convertToMS() {
		console.log("Converted to MS!");
	}

	return {
		direction: direction,
		convertToMPH: convertToMPH,
		convertToMS: convertToMS
	};
}

function CloudCoverage() {
	return {};
}