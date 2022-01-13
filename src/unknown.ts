export {};

const kansu = (): number => 7;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny: any = numberAny + 10;

// タイプガード
if (typeof numberUnknown === 'number') {
  let sumUnknown: unknown = numberUnknown + 10;
}
