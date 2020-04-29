import * as React from 'react';
import { useSelector } from 'react-redux';

import { authSelectors } from 'vdoc/modules/auth';

import { LoginPage } from '../pages/Login';

const AuthHoc = (props: React.Props<{}>) => {
  const authState = useSelector(authSelectors.selectAll);
  return authState.isLoading ? (
    <div />
  ) : authState.isLoggedIn && authState.user ? (
    <React.Fragment>{ props.children }</React.Fragment>
  ) : (
    <LoginPage />
  )
}

export { AuthHoc };
