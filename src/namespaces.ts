export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const meTokyo = new Japanese.Tokyo.Person('kaz Tokyo');
console.log(meTokyo);
const meOsaka = new Japanese.Osaka.Person('kaz Osaka');
console.log(meOsaka);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
