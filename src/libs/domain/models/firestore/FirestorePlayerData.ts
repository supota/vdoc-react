interface IFirestorePlayerData {
  japaneseFirstName: string;
  japaneseLastName: string;
  romanFirstName: string;
  romanLastName: string;
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
