import test from 'ava';

import { isAuthenticated, isUnauthenticated, testGetUser } from './auth';

test('isAuthenticated', (t) => {
  const user = testGetUser({ username: "lakin", password: "1234" });
  t.is(isAuthenticated(user), true);
});

test('isUnauthenticated', (t) => {
  const user = testGetUser({ username: "lakin", password: "12345" });
  t.is(isUnauthenticated(user), true);
});
