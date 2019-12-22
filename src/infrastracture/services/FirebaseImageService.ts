import { firebase } from "vdoc/application/firebase";

import { ImageService } from "vdoc/domain/services/ImageService";

class FirebaeImageService extends ImageService {
  async upload(data: BinaryType, filename: string): Promise<string> {
    const storageRef = firebase.storage().ref();
    const ref = storageRef.child(filename);
    return await "aaa";
  }
}
