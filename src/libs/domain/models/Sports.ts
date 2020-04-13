import { Entity } from "./Entity";

class Sports extends Entity {
  id: string;
  name: string;
  description: string;
  imageUrl: string;

  constructor(init?: Partial<Sports>) {
    super();
    Object.assign(this, init);
  }
}

export { Sports };
