import * as React from 'react';
import { useSelector } from 'react-redux';

import { uiSelectors } from 'vdoc/modules/ui';

const Loading = () => {

  const uiState = useSelector(uiSelectors.selectAll);
  if (!uiState.isLoading) {
    return <div></div>;
  }

  return (
    <div id="loading-wrapper" className="loading-wrapper">
      <div className="loading"></div>
    </div>
  )
}

export {Loading};
