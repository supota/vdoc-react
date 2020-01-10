interface IFirestorePlayerData {
  name: string;
  phonetic: string;
  year: number;
  month: number;
  day: number;
  profile: string;
  performances: string[];
  email: string;
  password: string;
  profilePhotoUrl: string;
  proofPhotoUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  siteUrl?: string;
}

export { IFirestorePlayerData };
