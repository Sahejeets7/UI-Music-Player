export type Maybe<T> = T | null | undefined;
export type Falsy<T> = Maybe<T> | false;

declare type CookieOptions = {
  domain: string;
  expires: Date | undefined;
  secure: boolean;
};
