import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { useFormik } from 'formik';
import moment from 'moment';

import { Player } from 'vdoc/libs/domain/models/Player';
import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

import { authActions } from 'vdoc/modules/auth';
import { uiActions } from 'vdoc/modules/ui';

import { validation } from './validation';
import { InputItem } from './component/InputItem';
import { TextareaItem } from './component/TextAreaItem';

export interface IFormValues {
  name: string;
  phonetic: string;
  birthday: string;
  profile: string;
  performances: string;
  twitterUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  siteUrl: string;
}
interface IInputFile {
  file: File;
  data: string;
}
type Props = {
  player: Player;
}

const Edit = withRouter((props: Props & RouteComponentProps) => {

  const player = props.player;
  const dispatch = useDispatch();
  const [profilePhoto, setprofilePhoto] = useState<IInputFile>();

  const formik = useFormik<IFormValues>({
    validationSchema: validation,
    initialValues: {
      name: player.name,
      phonetic: player.phonetic,
      birthday: moment(player.birthday).format('YYYY-MM-DD'),
      profile: player.profile,
      performances: player.performances.join('\n'),
      twitterUrl: player.twitterUrl,
      facebookUrl: player.facebookUrl,
      instagramUrl: player.instagramUrl,
      siteUrl: player.siteUrl,
    },
    onSubmit: async (values) => {
      // Enable Loading
      dispatch(uiActions.toggleLoading());
      // Upload image if exists
      let newProfilePhotoUrl;
      if (profilePhoto?.file) {
        newProfilePhotoUrl = await DomainProvider.imageService.upload(profilePhoto.file);
      }
      // Update user partially
      player.partialUpdate({
        name: values.name,
        phonetic: values.phonetic,
        birthday: moment(values.birthday).toDate(),
        profile: values.profile,
        performances: values.performances.trim().split('\n').filter(v => v).map(v => v.trim()),
        twitterUrl: values.twitterUrl,
        facebookUrl: values.facebookUrl,
        instagramUrl: values.instagramUrl,
        siteUrl: values.siteUrl,
        profilePhotoUrl: newProfilePhotoUrl
      });
      // Update firestore user
      const newPlayer = await DomainProvider.playerRepo.updatePlayer(player);
      // Update local user immediately
      dispatch(authActions.updateUser({
        newUser: newPlayer
      }));
      // Disable Loading
      dispatch(uiActions.toggleLoading());
      // Route to Top
      props.history.push('/');
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <ul>
        <InputItem
          name="name"
          type="text"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          label="名前"
          error={formik.errors.name}
        />
        <InputItem
          name="phonetic"
          type="text"
          required
          value={formik.values.phonetic}
          onChange={formik.handleChange}
          label="フリガナ"
          error={formik.errors.phonetic}
        />
        <InputItem
          name="birthday"
          type="date"
          required
          value={formik.values.birthday.toString()}
          onChange={formik.handleChange}
          label="誕生日"
          error={formik.errors.birthday}
        />
        <TextareaItem
          name="profile"
          required
          value={formik.values.profile}
          onChange={formik.handleChange}
          label="プロフィール"
          error={formik.errors.profile}
          rows={10}
        />
        <TextareaItem
          name="performances"
          value={formik.values.performances}
          onChange={formik.handleChange}
          label="実績"
          error={formik.errors.performances}
          rows={10}
        />
        <InputItem
          name="twitterUrl"
          type="text"
          value={formik.values.twitterUrl}
          onChange={formik.handleChange}
          label="Twitter URL"
          error={formik.errors.twitterUrl}
        />
        <InputItem
          name="facebookUrl"
          type="text"
          value={formik.values.facebookUrl}
          onChange={formik.handleChange}
          label="Facebook URL"
          error={formik.errors.facebookUrl}
        />
        <InputItem
          name="instagramUrl"
          type="text"
          value={formik.values.instagramUrl}
          onChange={formik.handleChange}
          label="Instagram URL"
          error={formik.errors.instagramUrl}
        />
        <InputItem
          name="siteUrl"
          type="text"
          value={formik.values.siteUrl}
          onChange={formik.handleChange}
          label="Site URL"
          error={formik.errors.siteUrl}
        />
        <li>
          <div className="ttl">
            <p>プロフィール写真</p>
            <span>必須</span>
          </div>
          <input
            type="file"
            onChange={(e) => {
              const reader = new FileReader();
              const file = e.target.files![0];
              reader.onload = () => {
                setprofilePhoto({
                  file: file,
                  data: reader.result as string
                });
              }
              reader.readAsDataURL(file);
            }}
          />
          <img
            className="preview-img"
            src={ profilePhoto ? profilePhoto.data : player.profilePhotoUrl }
            alt="プロフィール写真のプレビュー"
          />
        </li>
      </ul>
      <button type="submit">編集</button>
    </form>
  )
})

export { Edit }
