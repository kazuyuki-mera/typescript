export {};

type Mojiretsu = string;
const fooString: string = 'hello';
const barString: Mojiretsu = 'hello';

const example1 = {
  name: 'kaz',
  age: 26,
};

const example2: Profile = {
  name: 'kaz',
  age: 26,
};

type Profile = {
  name: string;
  age: number;
};

type Profile2 = typeof example1;
