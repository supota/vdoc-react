import * as React from 'react';
import { useSelector } from 'react-redux';

import { selectAuthState } from 'vdoc/modules/auth/selectors';

import { LoginPage } from '../pages/Login';

const AuthHoc = (props: React.Props<{}>) => {
  const authState = useSelector(selectAuthState);
  return authState.isLoading ? (
    <div />
  ) : authState.isLoggedIn ? (
    <React.Fragment>{ props.children }</React.Fragment>
  ) : (
    <LoginPage />
  )
}

export { AuthHoc };
