const selectAuthUser = (state: { auth: { user: User } }) => state.auth.user;
const selectUserTokenUser = (state: { auth: { userToken: User } }) =>
  state.auth.userToken;

export { selectAuthUser, selectUserTokenUser };
