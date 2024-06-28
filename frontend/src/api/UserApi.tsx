import axios from 'axios';
import { errorHandler } from '../lib/utils';
import { ErrorType } from '../lib/types';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

type UserType = {
  auth0Id: string;
  email: string;
};

export const useCreateUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createUserRequest = async (user: UserType) => {
    const token = await getAccessTokenSilently();
    try {
      // const
      await axios.post(`${BASE_API_URL}/api/user`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      throw new Error(errorHandler(error as ErrorType));
    }
  };

  const {
    mutateAsync: createUser,
    isPending,
    reset,
  } = useMutation({
    mutationFn: createUserRequest,
    onError: (error) => {
      toast.error(error.message);
      reset();
    },
  });

  return { createUser, isPending };
};
