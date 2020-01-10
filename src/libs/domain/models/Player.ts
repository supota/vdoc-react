import { Entity } from "./Entity";

import { IFirestorePlayerData } from "./firestore/FirestorePlayerData";

class Player extends Entity implements IFirestorePlayerData {
  id?: string;

  japaneseFirstName: string;
  japaneseLastName: string;
  romanFirstName: string;
  romanLastName: string;
  year: number;
  month: number;
  day: number;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  siteUrl?: string;

  constructor(init?: Partial<Player>) {
    super();
    Object.assign(this, init);
  }

  static factoryFromSnapshot(snapshot: firebase.firestore.DocumentSnapshot) {
    const data = <IFirestorePlayerData>snapshot.data();
    const id = snapshot.id;

    return new Player({
      id: id,
      ...data
    });
  }
}

export { Player };
