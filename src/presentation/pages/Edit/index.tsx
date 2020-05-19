import * as React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import { DomainProvider } from 'vdoc/libs/application/DomainProvider';
import { authSelectors } from 'vdoc/modules/auth';
import { BaseContainer } from 'vdoc/presentation/organisms/BaseContainer';
import { Edit, IFormValues } from './edit';
import { PlayerRepository } from 'vdoc/libs/domain/repositories/PlayerRepository';

const EditPage = withRouter((props) => {
  const authState = useSelector(authSelectors.selectAll);
  if (!authState.user) {
    return <div />;
  }

  return (
    <BaseContainer>
      <main className="form">
        <h3>
          プロフィールを編集しましょう
        </h3>
        <Edit
          player={authState.user!}
        />
      </main>
    </BaseContainer>
  );
});

export { EditPage };
