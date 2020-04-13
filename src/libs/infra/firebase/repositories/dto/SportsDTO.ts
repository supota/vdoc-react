import { firestore } from "firebase";

interface IFirestoreSports {
  name: string;
  description: string;
  imageUrl: string;
}

class SportsDTO implements IFirestoreSports {
  id: string;
  name: string;
  description: string;
  imageUrl: string;

  constructor(init?: Partial<SportsDTO>) {
    Object.assign(this, init);
  }

  static fromDoc(doc: firestore.DocumentSnapshot): SportsDTO {
    const data = <IFirestoreSports>doc.data();
    return new SportsDTO({
      id: doc.id,
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl
    });
  }

  toJson(): IFirestoreSports {
    return {
      name: this.name,
      description: this.description,
      imageUrl: this.imageUrl
    };
  }
}

export { SportsDTO };
