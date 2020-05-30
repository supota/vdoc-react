import { uuid } from 'uuidv4';

import { firebase } from 'vdoc/libs/infra/firebase/firebase';

import { ImageService } from 'vdoc/libs/domain/services/ImageService';

class FirebaseImageService extends ImageService {
  async upload(data: Blob | File): Promise<string> {
    const storageRef = firebase.storage().ref();
    const filename = `${uuid()}.png`;
    const imageRef = storageRef.child(`icons/${filename}`);
    const result = await imageRef.put(data);
    return result.ref.getDownloadURL();
  }
}

export { FirebaseImageService };
