import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum KindE {
  APPLY = "APPLY",
  FOLLOWUP = "FOLLOWUP",
  PREPCOVERLETTER = "PREPCOVERLETTER",
  PREPRESUME = "PREPRESUME",
  PREPFORINTERVIEW = "PREPFORINTERVIEW",
  REACHOUT = "REACHOUT",
  PHONESCREEN = "PHONESCREEN",
  PHONEINTERVIEW = "PHONEINTERVIEW",
  VIDEOINTERVIEW = "VIDEOINTERVIEW",
  ONSITEINTERVIEW = "ONSITEINTERVIEW",
  OFFERRECEIVED = "OFFERRECEIVED",
  ACCEPTOFFER = "ACCEPTOFFER",
  DECLINEOFFER = "DECLINEOFFER",
  REJECTED = "REJECTED",
  SENDTHANKYOU = "SENDTHANKYOU",
  EMAIL = "EMAIL",
  MEETING = "MEETING",
  PHONECALL = "PHONECALL",
  VIDEOCALL = "VIDEOCALL",
  GETREFERENCE = "GETREFERENCE",
  SENDAVAILABILITY = "SENDAVAILABILITY",
  ASSIGMENT = "ASSIGMENT",
  NETWORKINGEVENT = "NETWORKINGEVENT",
  OTHER = "OTHER"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Job {
  readonly id: string;
  readonly userId: string;
  readonly companyId?: string;
  readonly activities?: Activity[];
  readonly title: string;
  readonly salary?: number;
  readonly postedDate?: string;
  readonly deadline?: string;
  readonly description?: string;
  readonly remote?: boolean;
  readonly source?: string;
  readonly location?: string;
  readonly referredBy?: string;
  readonly benefits?: string[];
  readonly perks?: string[];
  readonly keywords?: string[];
  readonly color?: string;
  readonly status?: string;
  constructor(init: ModelInit<Job>);
  static copyOf(source: Job, mutator: (draft: MutableModel<Job>) => MutableModel<Job> | void): Job;
}

export declare class Activity {
  readonly id: string;
  readonly jobId: string;
  readonly kind?: KindE | keyof typeof KindE;
  readonly title?: string;
  readonly notes?: string;
  readonly dateStart?: string;
  readonly dateEnd?: string;
  constructor(init: ModelInit<Activity>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}

export declare class Company {
  readonly id: string;
  readonly userId: string;
  readonly type?: string;
  readonly website?: string;
  readonly industry?: string;
  readonly funded?: string;
  readonly ticker?: string;
  readonly address?: string;
  readonly country?: string;
  readonly alexaGlobal?: string;
  readonly alexaUS?: string;
  readonly logo?: S3Object;
  constructor(init: ModelInit<Company>);
  static copyOf(source: Company, mutator: (draft: MutableModel<Company>) => MutableModel<Company> | void): Company;
}

export declare class Contact {
  readonly id: string;
  readonly company?: Company;
  readonly jobId?: string;
  readonly userId: string;
  readonly name?: string;
  readonly lastName?: string;
  readonly title?: string;
  readonly address?: string;
  readonly phone?: string[];
  readonly email?: string[];
  readonly social?: string[];
  readonly recruiter?: boolean;
  readonly interviewer?: boolean;
  readonly avatar?: S3Object;
  constructor(init: ModelInit<Contact>);
  static copyOf(source: Contact, mutator: (draft: MutableModel<Contact>) => MutableModel<Contact> | void): Contact;
}

export declare class TakeAway {
  readonly id: string;
  readonly userId: string;
  readonly title?: string;
  readonly description?: string;
  readonly importance?: string;
  readonly industry?: string;
  readonly role?: string;
  readonly createdAt?: string;
  constructor(init: ModelInit<TakeAway>);
  static copyOf(source: TakeAway, mutator: (draft: MutableModel<TakeAway>) => MutableModel<TakeAway> | void): TakeAway;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly name?: string;
  readonly lastName?: string;
  readonly avatar?: S3Object;
  readonly jobs?: Job[];
  readonly contacts?: Contact[];
  readonly takeAways?: TakeAway[];
  readonly companies?: Company[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}