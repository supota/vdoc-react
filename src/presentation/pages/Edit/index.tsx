import * as React from 'react';

import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

import { Edit } from './edit';

const EditPage = () => {
  return (
    <BaseContainer>
      <main className="form">
        <h3>
          プロフィールを編集しましょう
        </h3>
        <Edit />
      </main>
    </BaseContainer>
  );
};

export { EditPage };
