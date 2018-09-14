class Purse {
  constructor(goldCoin, silverCoin, copperCoin) {
    this.goldCoin = goldCoin;
    this.silverCoin = silverCoin;
    this.copperCoin = copperCoin;
  }
  get copperValue() {
    return (
      this.goldCoin.quantity * this.goldCoin.value +
      this.silverCoin.quantity * this.silverCoin.value +
      this.copperCoin.quantity * this.copperCoin.value
    );
  }
}

const CoinType = Object.freeze({ COPPER: "copper", SILVER: "Silver", GOLD: "Gold" });

class Coin {
  constructor(type) {
    this.type = type;
  }
}

class Gold extends Coin {
  constructor(quantity) {
    super(CoinType.GOLD);
    this.value = 240;
    this.quantity = quantity;
  }
}

class Silver extends Coin {
  constructor(quantity) {
    super(CoinType.SILVER);
    this.value = 20;
    this.quantity = quantity;
  }
}

class Copper extends Coin {
  constructor(quantity) {
    super(CoinType.COPPER);
    this.value = 1;
    this.quantity = quantity;
  }
}

var purse = new Purse(new Gold(1), new Silver(12), new Copper(13));
console.log(purse.copperValue);
