import axios from 'axios';
import { errorHandler } from '../lib/utils';
import { ErrorType, User } from '../lib/types';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useAuth0 } from '@auth0/auth0-react';
import { UserFormData } from '../components/forms/UserProfileForm';

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

type UserType = {
  auth0Id: string;
  email: string;
};

// CREATE USER
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

// GET USER
export const useGetUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getUserRequest = async (): Promise<User> => {
    const token = await getAccessTokenSilently();
    const response = await axios.get(`${BASE_API_URL}/api/user/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  };

  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['user'],
    queryFn: getUserRequest,
  });

  if (error) {
    toast.error(error.message);
  }

  return { userData, isLoading };
};

// UPDATE USER
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { getAccessTokenSilently } = useAuth0();
  const updateUserRequest = async (userData: UserFormData) => {
    const token = await getAccessTokenSilently();
    const res = await axios.patch(`${BASE_API_URL}/api/user`, userData, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return res.data;
  };

  const {
    mutateAsync: updateUser,
    isPending,
    reset,
  } = useMutation({
    mutationFn: updateUserRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      toast.success('User updated successfully');
    },
    onError: (error) => {
      toast.error(error.message);
      reset();
    },
  });

  return {
    updateUser,
    isPending,
  };
};
