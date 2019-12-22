abstract class ImageService {
  abstract async upload(data: Blob): Promise<string>;
}

export { ImageService };
