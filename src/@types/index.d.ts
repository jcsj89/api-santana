declare namespace Express {
  export interface Request {
    user: { id: string; isAdmin: boolean };
  }
  export interface Response {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: any;
  }
}
