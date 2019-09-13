function create_person(name) {
	function getName() {
		return name;
	};

	function setName(newName) {
		name = newName;
	};

	return {
		getName: getName,
		setName: setName
	}
}

let person = create_person("foo");
console.log(person.getName());
person.setName("bar");
console.log(person.getName()); 