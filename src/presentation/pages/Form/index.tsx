import * as React from 'react';
import { useState } from 'react';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

import { FormContainer } from './container/FormContainer';

const FormPage = () => {
  return (
    <BaseContainer>
      <main className="form">
        <h3>
          情報を入力するだけで
          <br />
          自分のページを作成できます。
        </h3>
        <FormContainer />
      </main>
    </BaseContainer>
  );
};

export { FormPage };
