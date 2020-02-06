const CONFIG = {
  animalLength: 5
};

let viewModel = {
  animal: ko.observable(),
  animals: ko.observableArray(),
  addAnimal: addAnimal,
  error: ko.observable()
};

function addAnimal() {
  if (!this.animals().includes(this.animal())) {
    this.error(null);
    this.animals.push(this.animal());
  } else {
    this.error(`Animal ${this.animal()} already exists`);
  }
}

function fullAnimalName(fullName, element) {
  element.target.innerText = fullName;
}

// custom binding handler
// limit animal display length based on config value
ko.bindingHandlers.shortenedAnimalName = {
  update: function(element, valueAccessor) {
    let value = ko.unwrap(valueAccessor());
    element.innerText =
      value.length > CONFIG.animalLength
        ? `${value.slice(0, CONFIG.animalLength)}...`
        : value;
  }
};

viewModel.animals.push("cat");
viewModel.animals.push("dog");
viewModel.animals.push("frog");
viewModel.animals.push("elephant");

ko.applyBindings(viewModel);
