// Business Logic for LogBook------
function LogBook() {
  this.destinations = {};
  this.currentId = 0;
}
LogBook.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};
LogBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
LogBook.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
};
LogBook.prototype.deleteDestination = function(id) {
  if (this.destinations[id] === undefined) {
    return false;
  }
  delete this.destinations[id];
  return true;
}
//Business Logic for Contacts-------
function Destination(location, landmarks, food, memories, people) {
  this.location = location;
  this.landmarks = landmarks;
  this.food = food;
  this.memories = memories;
  this.people = people;
}
Destination.prototype.name = function() {
  return this.location;
};