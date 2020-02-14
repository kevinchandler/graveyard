function fullName() {
  return `${this.firstName()} ${this.lastName()}`;
}

function viewModel() {
  this.firstName = ko.observable("");
  this.lastName = ko.observable("");
  this.fullName = ko.computed(fullName);
  this.displayGreeting = ko.observable(false);
}

function showGreeting() {
  let firstName = ko.unwrap(this.firstName);
  let lastName = ko.unwrap(this.lastName);
  if (firstName.length && lastName.length) {
    this.displayGreeting(true);
  } else {
    this.displayGreeting(false);
  }
}

ko.applyBindings(viewModel);
