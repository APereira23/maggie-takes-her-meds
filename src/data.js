import uniqid from "uniqid";

const list = [
  new Item("Aripiprazol", 10, 1),
  new Item("Risperidona", 20, 1),
  new Item("Rivotril", 10, 3),
  new Item("Lítio", 30, 1),
  new Item("Topiramato", 10, 1),
];

function Item(name, quantity, dailyDose) {
  this.name = name;
  this.quantity = quantity;
  this.dailyDose = dailyDose;
  this.id = uniqid();
}

export default list;

export { Item };
