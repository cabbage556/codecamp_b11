export interface IAuthUser {
  user?: {
    id: string;
  };
}

// Context는 req, res를 포함한다.
export interface IContext {
  req: Request & IAuthUser;
  res: Response;
}
