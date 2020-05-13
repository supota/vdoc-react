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

  const handleSubmit = (values: IFormValues): void => {
    /*
    let newUrl;
    if (values.profileImg) {
      console.log(typeof values.profileImg);
      console.log(values.profileImg);
      newUrl = await DomainProvider.imageService.upload(values.profileImg);
    }
    */
    DomainProvider.playerRepo.updatePlayer({
      name: values.name,
      phonetic: values.phonetic,
      birthday: moment(values.birthday).toDate(),
      profile: values.profile,
      performances: values.performances.trim().split('\n').map(v => v.trim()).map(v => v),
      twitterUrl: values.twitterUrl,
      facebookUrl: values.facebookUrl,
      siteUrl: values.siteUrl,
    });
    props.history.push('/');
  }

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
          handleSubmit={handleSubmit}
        />
      </main>
    </BaseContainer>
  );
});

export { EditPage };
