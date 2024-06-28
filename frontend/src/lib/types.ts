export type ErrorType = {
  response: {
    data: {
      message: string;
    };
  };
  message: string;
};

export type User = {
  id: string;
  email: string;
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};
