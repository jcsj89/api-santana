declare namespace Express {
  export interface Request {
    user: { id: string; isAdmin: boolean };
  }
  export interface Response {
    user: any;
  }
}
