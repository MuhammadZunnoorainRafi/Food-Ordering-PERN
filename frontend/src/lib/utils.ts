import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ErrorType } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const errorHandler = (error: ErrorType) => {
  return error.response?.data?.message || error.message;
};
