import * as React from 'react';
import {
  Form,
  FormikProps,
  withFormik,
} from 'formik';
import moment from 'moment';

import { Player } from 'vdoc/libs/domain/models/Player';
import { DomainProvider } from 'vdoc/libs/application/DomainProvider';

import { validation } from './validation';
import { InputField } from './component/InputField';
import { Thumb } from './component/Thumb';

export interface IFormValues {
  name: string;
  phonetic: string;
  birthday: string;
  profile: string;
  performances: string;
  twitterUrl: string;
  facebookUrl: string;
  siteUrl: string;
  profileImg: File | '';
}
type FormProps = IFormValues & {
  profilePhotoUrl: string;
}

const InnerForm = (props: FormikProps<FormProps>) => {
  const {
    values,
    errors,
    handleSubmit,
    isSubmitting,
    setFieldValue
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <ul>
        <li>
          <InputField
            title='お名前'
            placeholder='お名前を入力してください'
            isRequired={true}
            name='name'
            type='text'
            as='input'
            error={errors.name}
          />
        </li>
        <li>
          <InputField
            title='フリガナ'
            placeholder='フリガナを入力してください'
            isRequired={true}
            name='phonetic'
            type='text'
            as='input'
            error={errors.phonetic}
          />
        </li>
        <li>
          <InputField
            title='誕生日'
            placeholder='誕生日を入力してください'
            isRequired={true}
            name='birthday'
            type='date'
            as='input'
            error={errors.birthday}
          />
        </li>
        <li>
          <InputField
            title='プロフィール'
            placeholder='自己紹介など、50文字以上1000文字以内で入力してください'
            isRequired={true}
            name='profile'
            type='text'
            as='textarea'
            rows={10}
            error={errors.profile}
          />
        </li>
        <li>
          <InputField
            title='実績'
            placeholder='改行して入力してください。&#13;&#10;例：&#13;&#10;2018年1月1日 マイナースポーツ大阪連盟加入&#13;&#10;2019年1月1日 マイナースポーツ大阪大会準優勝&#13;&#10;2020年1月1日 マイナースポーツ大阪大会東京大会優勝'
            isRequired={false}
            name='performances'
            type='text'
            as='textarea'
            rows={10}
            error={errors.performances}
          />
        </li>
        <li>
          <InputField
            title='Twitter URL'
            placeholder='TwitterのURL(あれば)'
            isRequired={false}
            name='twitterUrl'
            type='text'
            as='input'
            error={errors.twitterUrl}
          />
        </li>
        <li>
          <InputField
            title='Facebook URL'
            placeholder='FacebookのURL(あれば)'
            isRequired={false}
            name='facebookUrl'
            type='text'
            as='input'
            error={errors.facebookUrl}
          />
        </li>
        <li>
          <InputField
            title='Site URL'
            placeholder='サイトのURL(あれば)'
            isRequired={false}
            name='siteUrl'
            type='text'
            as='input'
            error={errors.siteUrl}
          />
        </li>
        {/*
        <li>
          <InputField
            title='プロフィール写真'
            placeholder=''
            isRequired={true}
            name='profileImg'
            type='file'
            as='input'
            error={errors.profileImg}
            onChange={(e) => {
              const reader = new FileReader();
              reader.onload = () => {
                setFieldValue('profileImg', reader.result);
              }
              reader.readAsDataURL(e.target.files![0]);
            }}
          />
        </li>
        */}
      </ul>
      <button type="submit">
        確認画面へ
      </button>
    </Form>
  )
}

const Edit = withFormik<
  {
    player: Player,
    handleSubmit: (values: IFormValues) => void
  },
  FormProps
  >
({
  mapPropsToValues: (props) => {
    const player = props.player;
    return {
      name: player.name,
      phonetic: player.phonetic,
      birthday: moment(player.birthday).format('YYYY-MM-DD'),
      profile: player.profile,
      performances: player.performances.join('\n'),
      twitterUrl: player.twitterUrl,
      facebookUrl: player.facebookUrl,
      siteUrl: player.siteUrl,
      profileImg: '',
      profilePhotoUrl: player.profilePhotoUrl
    }
  },
  validationSchema: validation(),
  handleSubmit: (values: IFormValues, formikBug) => {
    formikBug.props.handleSubmit(values);
  },
})(InnerForm);

export { Edit }
