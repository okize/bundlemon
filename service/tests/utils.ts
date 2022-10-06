import { UserSessionData } from '@/types/auth';
import { randomBytes } from 'crypto';

export function generateRandomString(length = 10) {
  return randomBytes(length / 2).toString('hex');
}

export function generateRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function generateUserSessionData(): UserSessionData {
  return {
    provider: 'github',
    name: generateRandomString(),
    auth: {
      token: generateRandomString(),
    },
  };
}
