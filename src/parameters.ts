export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile('kaz', 26);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['tak', 26];
debugProfile(...profile);
