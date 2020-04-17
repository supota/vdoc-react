import { Entity } from './Entity';

class Sports extends Entity {
  id: SportsID;
  name: string;
  description: string;
  imageUrl: string;

  constructor(init?: Partial<Sports>) {
    super();
    Object.assign(this, init);
  }
}

class SportsID {
  readonly value: string;
  constructor(value: string) {
    this.value = value;
  }

  isEqualTo(other: SportsID): boolean {
    return this.value === other.value;
  }
}

export { Sports, SportsID };
