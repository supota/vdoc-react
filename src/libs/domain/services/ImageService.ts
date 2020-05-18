abstract class ImageService {
  /**
   * 画像をアップロードする
   *
   * @param data 画像のBlobデータ
   */
  abstract async upload(data: Blob | File): Promise<string>;
}

export { ImageService };
