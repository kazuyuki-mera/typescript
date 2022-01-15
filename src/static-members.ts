export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'ka';
  static lastName: string = 'me';
  static work(): string {
    return `my name is ${this.firstName}.${this.lastName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
