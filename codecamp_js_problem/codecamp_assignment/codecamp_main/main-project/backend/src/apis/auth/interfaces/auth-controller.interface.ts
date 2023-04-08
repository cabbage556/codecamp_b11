import { CreateUserInput } from 'src/apis/users/dto/create-user.input';

export interface IOAuthUser {
  // user: {
  //   name: string;
  //   email: string;
  //   password: string;
  //   phone: string;
  //   address: string;
  //   detailAddress: string;
  //   latestAddress: string;
  //   latestDetailAddress: string;
  //   createdAt: Date;
  //   deletedAt: Date;
  // };
  user: CreateUserInput;
}
