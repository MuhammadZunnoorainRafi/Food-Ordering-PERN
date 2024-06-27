import axios from 'axios';
import { errorHandler } from '../lib/utils';
import { ErrorType } from '../lib/types';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

type UserType = {
  auth0Id: string;
  email: string;
};

export const useCreateUser = () => {
  const createUserRequest = async (user: UserType) => {
    try {
      await axios.post(`${BASE_API_URL}/api/user`, user);
    } catch (error) {
      throw new Error(errorHandler(error as ErrorType));
    }
  };

  const {
    mutateAsync: createUser,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: createUserRequest,
  });

  return { createUser, isPending, isError, isSuccess };
};
