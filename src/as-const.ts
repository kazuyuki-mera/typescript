export {};

let name = 'kaz';
name = 'kazu';

let nickname = 'kaz' as const;
nickname = 'kaz';

let profile = {
  name: 'kaz',
  height: 175,
} as const;

// profile.name = 'tak';f
