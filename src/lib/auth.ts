
type UserProfile = {
  username: string;
  //first_name: string;
  //last_name: string;
  // password: string;
  //email: string;
};


// NOTE: This token is private never export it.
// Type Level Proof
//-----------------------------------------------------------------------------------
const authenticationProofToken: unique symbol = Symbol('User is Authenticated');
type AuthenticatedProofTokenType = typeof authenticationProofToken;

export const UserStatuses = ['Authenticated', 'Unauthenticated'] as const;
export type UserStatus = typeof UserStatuses[number];

export type AuthenticatedUser = {
  readonly status: 'Authenticated';
  readonly profile: UserProfile;
  authenticationProofToken: AuthenticatedProofTokenType;
};
export type UnauthenticatedUser = {
  readonly status: 'Unauthenticated';
  authenticationProofToken: AuthenticatedProofTokenType;
};
export type User = AuthenticatedUser | UnauthenticatedUser;

// Type Guards
export const isAuthenticated = (u: User): u is AuthenticatedUser =>
  u.status == 'Authenticated';
export const isUnauthenticated = (u: User): u is AuthenticatedUser =>
  u.status == 'Unauthenticated';

// Constructors (don't export these)
const authenticated = (username: string): AuthenticatedUser => ({
  profile: { username },
  status: 'Authenticated',
  authenticationProofToken,
});
const unauthenticated = (): UnauthenticatedUser => ({
  status: 'Unauthenticated',
  authenticationProofToken,
});

//-----------------------------------------------------------------------------------
// Public authentication API
//-----------------------------------------------------------------------------------
export type AuthenticationRequest = {
  readonly username: string;
  readonly password: string;
};

export const testGetUser = (req: AuthenticationRequest): User => {
  if (req.username === 'lakin' && req.password === '1234') {
    return authenticated(req.username);
  }
  return unauthenticated();
};

export const getUser = (req: AuthenticationRequest): User => {
  // TODO: implement the real version
  if (req.username == 'wut') return unauthenticated();
  return unauthenticated();
};
