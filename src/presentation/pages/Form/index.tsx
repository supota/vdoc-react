import * as React from 'react';
import { useState } from 'react';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

import { FormTest } from './form';
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
        <FormTest />
      </main>
    </BaseContainer>
  );
};

export { FormPage };
