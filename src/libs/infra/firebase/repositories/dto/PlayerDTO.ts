import { firestore } from 'firebase';

interface IFirestorePlayer {
  name: string;
  phonetic: string;
  birthday: firestore.Timestamp;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  siteUrl: string;
  sportsID: string;
}

class PlayerDTO implements IFirestorePlayer {
  id: string;
  name: string;
  phonetic: string;
  birthday: firestore.Timestamp;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  twitterUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  siteUrl: string;
  sportsID: string;

  constructor(init?: Partial<PlayerDTO>) {
    Object.assign(this, init);
  }

  static fromDoc(doc: firestore.DocumentSnapshot): PlayerDTO {
    const data = doc.data() as IFirestorePlayer;
    return new PlayerDTO({
      id: doc.id,
      name: data.name,
      phonetic: data.phonetic,
      birthday: data.birthday,
      profile: data.profile,
      performances: Array.from(data.performances),
      email: data.email,
      password: data.password,
      profilePhotoUrl: data.profilePhotoUrl,
      twitterUrl: data.twitterUrl,
      facebookUrl: data.facebookUrl,
      instagramUrl: data.instagramUrl,
      siteUrl: data.siteUrl,
      sportsID: data.sportsID,
    });
  }

  toJson(): IFirestorePlayer {
    return {
      name: this.name,
      phonetic: this.phonetic,
      birthday: this.birthday,
      profile: this.profile,
      performances: this.performances,
      email: this.email,
      password: this.password,
      profilePhotoUrl: this.profilePhotoUrl,
      twitterUrl: this.twitterUrl,
      facebookUrl: this.facebookUrl,
      instagramUrl: this.instagramUrl,
      siteUrl: this.siteUrl,
      sportsID: this.sportsID,
    };
  }
}

export { PlayerDTO };
