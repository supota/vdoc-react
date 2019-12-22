import { uuid } from "uuidv4";

import { firebase } from "vdoc/application/firebase";

import { ImageService } from "vdoc/domain/services/ImageService";

class FirebaeImageService extends ImageService {
  async upload(data: Blob): Promise<string> {
    const storageRef = firebase.storage().ref();
    const filename = `${uuid()}.png`;
    const imageRef = storageRef.child(`images/${filename}`);
    await imageRef.put(data);
    return filename;
  }
}
