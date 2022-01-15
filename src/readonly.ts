export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let card = new VisaCard('kaz');
console.log(card);
// card.owner = 'taro';
