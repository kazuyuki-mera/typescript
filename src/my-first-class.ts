export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  profile(): string {
    return `name: ${this.name} age: ${this.age}`;
  }
}
let kaz = new Person('kaz', 26);

console.log(kaz.profile());
