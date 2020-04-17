import { firestore } from 'firebase';

class TimestampMapper {
  static encode(date: Date): firestore.Timestamp {
    return firestore.Timestamp.fromDate(date);
  }

  static decode(timestamp: firestore.Timestamp): Date {
    return timestamp.toDate();
  }
}

export { TimestampMapper };
