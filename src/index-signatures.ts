export {};

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = {
  name: 'kaz',
  underTwenty: false,
};
profile.age = 26;
profile.nationality = 'Japan';
