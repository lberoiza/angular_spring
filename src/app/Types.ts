export type Author = {
  name: string,
  surname: string
};

export type AlertMessage = {
  title: string,
  content: string
};

export type ApiResponseTyp<T> = {
  messages: {[key: string]: string[]},
  isSuccessfully: boolean,
  response: T
};
