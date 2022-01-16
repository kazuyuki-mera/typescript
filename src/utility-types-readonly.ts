export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'kaz',
  age: 26,
};
me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'tak',
  age: 26,
};
// friend.age++;

type YomitoriSenyou<T> = {
  readonly [P in keyof T]: T[P];
};
type YomitoriSenyouProfile = YomitoriSenyou<Profile>;
