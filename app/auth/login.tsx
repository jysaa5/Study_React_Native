import FixedBottomCTA from '@/components/FixedBottomCTA';
import { View, StyleSheet } from 'react-native';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import EmailInput from '@/components/EmailInput';
import PasswordInput from '@/components/PasswordInput';

type FormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function LoginScreen() {
  const loginForm = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const onSubmit = (formValues: FormValues) => {
    console.log('formValues', formValues);
  };

  return (
    <FormProvider {...loginForm}>
      <View style={styles.container}>
        <EmailInput />
        <PasswordInput />
      </View>
      <FixedBottomCTA label="로그인하기" onPress={loginForm.handleSubmit(onSubmit)} />
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    gap: 16,
  },
});
