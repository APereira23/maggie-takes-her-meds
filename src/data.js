import uniqid from "uniqid";

const list = [
  new Item("Aripiprazol", 1, "morning"),
  new Item("Risperidona", 1, "morning"),
  new Item("Rivotril", 1, "morning"),
  new Item("Lítio", 1, "evening"),
  new Item("Topiramato", 1, "sos"),
];

function Item(name, dose, time) {
  this.name = name;
  this.dose = dose;
  this.time = time;
  this.id = uniqid();
}

export default list;

export { Item };
