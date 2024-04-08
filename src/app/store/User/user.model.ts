export class User {
    constructor(
      public email: string,
      public _id?: string,
      public username?: string,
      public firstName?: string,
      public lastName?: string,
      public gender?: string,
      public dateOfBirth?: Date,
      public profilePic?: string,
      public isVerified?: boolean,
      public isBlocked?:boolean
    ) {}
  }
  