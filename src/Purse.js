class Purse {

  constructor() {
    this.value = 0
  }
  valueOf() {
    return 0
  }
  normalize() {
    var coins = {
      gold: 0,
      silver: 0,
      copper: 0
    }
    coins.gold = Math.floor(this.value / Gold.value)
    coins.silver = Math.floor((this.value % Gold.value) / Silver.value)
    coins.copper = this.value - coins.gold * Gold.value - coins.silver * Silver.value
    return coins
  }
  Add(coin) {
    this.value += coin.quantity * coin.value;
  }
  Remove(coin) {
    this.value = Math.max(this.value - coin.quantity * coin.value, 0);
  }
}

const CoinType = Object.freeze({COPPER: "copper", SILVER: "Silver", GOLD: "Gold"});

class Coin {
  constructor(type) {
    this.type = type;
  }
}

class Gold extends Coin {
  constructor(quantity) {
    super(CoinType.GOLD);
    this.quantity = quantity;
    this.value = Gold.value;
  }
  valueOf() {
    return Gold.value * this.quantity
  }
}
Gold.value = 240;
class Silver extends Coin {
  constructor(quantity) {
    super(CoinType.SILVER);
    this.quantity = quantity;
    this.value = Silver.value;
  }
  valueOf() {
    return Silver.value * this.quantity
  }
}
Silver.value = 20

class Copper extends Coin {
  constructor(quantity) {
    super(CoinType.COPPER);
    this.quantity = quantity;
    this.value = Copper.value;
  }
  valueOf() {
    return Copper.value * this.quantity
  }
}
Copper.value = 1

export {Purse, Gold, Silver, Copper}
//////
/* var purse = new Purse();
console.clear();
purse.Add(new Gold(1));
purse.Add(new Silver(12))
purse.Add(new Copper(13))
console.log(purse.value);
purse.Remove(new Copper(60))
purse.value = -100
console.log(purse.value);
console.log(purse.normalize());
console.log(purse) */