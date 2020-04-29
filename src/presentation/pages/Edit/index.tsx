import * as React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'vdoc/modules/auth';
import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';

import { Edit } from './edit';

const EditPage = () => {

  const authState = useSelector(authSelectors.selectAll);
  if (!authState.user) {
    return <div />;
  }
  console.log(authState.user);

  return (
    <BaseContainer>
      <main className="form">
        <h3>
          プロフィールを編集しましょう
        </h3>
        <Edit
          player={ authState.user! }
        />
      </main>
    </BaseContainer>
  );
};

export { EditPage };
