import test from 'ava';

import { isAuthenticated, isUnauthenticated, getUser, AuthenticationRequest } from './auth';

export const isLakinWith1234 = (req: AuthenticationRequest): boolean => {
  return req.username === 'lakin' && req.password === '1234';
};

const testGetUser = getUser(isLakinWith1234)

test('isAuthenticated', (t) => {
  const user = testGetUser({ username: "lakin", password: "1234" });
  t.is(isAuthenticated(user), true);
});

test('isUnauthenticated', (t) => {
  const user = testGetUser({ username: "lakin", password: "12345" });
  t.is(isUnauthenticated(user), true);
});

