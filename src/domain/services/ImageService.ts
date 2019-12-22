abstract class ImageService {
  abstract async upload(data: BinaryType, filename: string): Promise<string>;
}

export { ImageService };
