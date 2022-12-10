import {UNSPLASH_API_URL, UNSPLASH_API_TOKEN} from '@env';

const _env = {
  UNSPLASH_API_URL,
  UNSPLASH_API_TOKEN,
};

export const getEnv = (name: keyof typeof _env): string => {
  const value = _env[name];

  if (!value) throw new Error('Not found env var: ' + name);

  return value;
};
