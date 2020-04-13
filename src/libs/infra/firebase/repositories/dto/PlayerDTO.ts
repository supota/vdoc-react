import { firestore } from 'firebase';

interface IFirestorePlayer {
  name: string;
  birthday: Date;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl: string;
  twitterUrl: string | null;
  facebookUrl: string | null;
  siteUrl: string | null;
}

class PlayerDTO implements IFirestorePlayer {
  id: string;
  name: string;
  birthday: Date;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl: string;
  twitterUrl: string | null;
  facebookUrl: string | null;
  siteUrl: string | null;

  constructor(init?: Partial<PlayerDTO>) {
    Object.assign(this, init);
  }

  static fromDoc(doc: firestore.DocumentSnapshot): PlayerDTO {
    const data = doc.data() as IFirestorePlayer;
    return new PlayerDTO({
      id: doc.id,
      name: data.name,
      birthday: data.birthday,
      profile: data.profile,
      performances: Array.from(data.performances),
      email: data.email,
      password: data.password,
      profilePhotoUrl: data.profilePhotoUrl,
      proofPhotoUrl: data.proofPhotoUrl,
      twitterUrl: data.twitterUrl,
      facebookUrl: data.facebookUrl,
      siteUrl: data.siteUrl,
    });
  }

  toJson(): IFirestorePlayer {
    return {
      name: this.name,
      birthday: this.birthday,
      profile: this.profile,
      performances: this.performances,
      email: this.email,
      password: this.password,
      profilePhotoUrl: this.profilePhotoUrl,
      proofPhotoUrl: this.proofPhotoUrl,
      twitterUrl: this.twitterUrl,
      facebookUrl: this.facebookUrl,
      siteUrl: this.siteUrl,
    };
  }
}

export { PlayerDTO };
