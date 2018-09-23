import foods from "../data/foods.json";

class Inventory {
  constructor() {}

  static Create(food) {
    console.log("Allah yaratti derim, sikerim!")
  }
}

const EquipmentType = Object.freeze({POT: "Pot", PAN: "Pan", OVEN: "Oven", SPIT: "Spit"});

class Equipment {
  constructor(type) {
    this.type = type;
  }
}

const IngredientType = Object.freeze({
  EGG: "Egg",
  NUTS: "Nuts",
  SPICES: "Spices",
  VEGETABLES: "Vegetables",
  FRUIT: "Fruit",
  MEAT: "Meat",
  POULTRY: "Poultry",
  EXOTIC: "Exotic",
  DAIRY: "Dairy",
  SEAFOOD: "Seafood"
});

class Ingredient {
  constructor(type, quantity = 1) {
    this.type = type;
    this.quantity = quantity;
  }
}

class InventoryItem {
  constructor(name, type) {
    this.name = name;
  }
}
class Food extends InventoryItem {
  constructor(name, ingredients, equipment) {
    super(name);
    this.ingredients = ingredients;
    this.equipment = equipment;
  }

  /*
  profit=1.2
  Math.pow(numOfTotalIngredients, (1+numOfExoticIngredients)*((11+equipment)/10)*profit)
  */

  get numOfEquipment() {
    return this.equipment.length;
  }
  get numOfOrdinaryIngredients() {
    return this
      .ingredients
      .filter(ingredient => ingredient.type != IngredientType.EXOTIC)
      .reduce((ingredient, next) => ingredient.quantity + next.quantity);
  }
  get numOfExoticIngredients() {
    return this
      .ingredients
      .filter(ingredient => ingredient.type == IngredientType.EXOTIC)
      .quantity || 0;
  }

  get cost() {
    return Math.pow(this.numOfOrdinaryIngredients + this.numOfExoticIngredients, (1 + this.numOfExoticIngredients) * ((11 + this.numOfEquipment) / 10) * 1.2);
  }
}
/*
var dish = new Food("Suck my Dish", [
  new Ingredient(IngredientType.EGG, 2),
  new Ingredient(IngredientType.NUTS)
], [new Equipment(EquipmentType.PAN)]);

console.log(dish.cost);
console.log(dish.numOfExoticIngredients);
console.log(dish.numOfOrdinaryIngredients);
 */
export {Equipment, EquipmentType, Food, Inventory}