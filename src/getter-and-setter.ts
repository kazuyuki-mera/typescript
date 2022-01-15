export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set owner(owner: string) {
    this.owner = owner;
  }

  get secretNumber() {
    return this._secretNumber;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

let card = new MyNumberCard('kaz', 1234567890);
console.log(card.owner);
card.secretNumber = 1;
console.log(card.secretNumber);
