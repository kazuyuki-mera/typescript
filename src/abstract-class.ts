export {};

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry(): string {
    return 'roar';
  }
}

class Tigger extends Animal {
  cry(): string {
    return 'grr';
  }
}
