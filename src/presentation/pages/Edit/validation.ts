import * as Yup from 'yup';

export const validation = () => {
  return Yup.object().shape({
    name: Yup.string()
      .required('名前を入力してください')
      .max(100, '名前は100字以内で入力してください'),
    phonetic: Yup.string()
      .required('フリガナを入力してください')
      .max(100, 'フリガナは100字以内で入力してください'),
    birthday: Yup.date()
      .required('誕生日を入力してください')
      .max(new Date(), '日付が不正です'),
    profile: Yup.string()
      .required('プロフィールを入力してください')
      .min(50, 'プロフィールは50文字以上入力してください')
      .max(1000, 'プロフィールは1000文字以内で入力してください'),
    performances: Yup.string().max(
      1000,
      '実績は1000文字以内で入力してください',
    ),
    twitterURL: Yup.string(),
    facebookURL: Yup.string(),
    siteURL: Yup.string(),
    profileImg: Yup.mixed(),
  });
};
