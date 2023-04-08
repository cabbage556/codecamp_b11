import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';

export interface IUsersServiceFindOne {
  id: string;
}

export interface IUsersServiceCreate {
  createUserInput: CreateUserInput;
}

export interface IUsersServiceFindOneByEmail {
  email: string;
}

export interface IUsersServiceUpdate {
  id: string;
  updateUserInput: UpdateUserInput;
}

export interface IUsersServiceDelete {
  id: string;
}

export interface IUsersServiceFindLoginUser {
  id: string;
}

export interface IUsersServiceGetHashedPassword {
  password: string;
}

export interface IUsersServiceUpdateUserPassword {
  id: string;
  password: string;
}
