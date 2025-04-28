import { postLogin, postSignup } from '@/api/auth';
import { saveSecureStore } from '@/utils/secureStore';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

function useLogin() {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: async ({ accessToken }) => {
      await saveSecureStore('accessToken', accessToken);
    },
    onError: () => {},
  });
}

function useSignup() {
  return useMutation({
    mutationFn: postSignup,
    onSuccess: () => router.replace('/auth/login'),
    onError: () => {},
  });
}
