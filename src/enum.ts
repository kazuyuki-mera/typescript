export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.December);

enum COLORS {
  RED = '#FF0000',
  BLUE = '#0000FF',
  GREEN = '#008000',
  WHITE = '#FFFFFF',
  BLACK = '#000000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}
