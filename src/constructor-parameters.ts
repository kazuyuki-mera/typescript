export {};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let taro = new Person('taro', 10);
console.log(taro);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;
const profile: Profile = ['kaz', 26];
const kaz = new Person(...profile);
console.log(kaz);
