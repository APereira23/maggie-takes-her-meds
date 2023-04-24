import uniqid from "uniqid";

const list = [];

function Item(name, dose, time) {
  this.name = name;
  this.dose = dose;
  this.time = time;
  this.id = uniqid();
}

export default list;

export { Item };
