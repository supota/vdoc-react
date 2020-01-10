import { Entity } from "./Entity";

import { firebase } from "vdoc/libs/infra/firebase/firebase";

interface IFirestoreSportsData {
  name: string;
  description: string;
  imageUrl: string;
}

class Sports extends Entity {
  id: string;
  name: string;
  description: string;
  imageUrl: string;

  constructor(init?: Partial<Sports>) {
    super();
    Object.assign(this, init);
  }

  static factoryFromSnapshot(snapshot: firebase.firestore.DocumentSnapshot) {
    const data = <IFirestoreSportsData>snapshot.data();
    const id = snapshot.id;
    const name = data.name;
    const description = data.description;
    const imageUrl = data.imageUrl;

    return new Sports({
      id: id,
      name: name,
      description: description,
      imageUrl: imageUrl
    });
  }
}

export { Sports };
