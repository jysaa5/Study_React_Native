import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import InputField from './InputField';
import { TextInputProps } from 'react-native';

interface Props {
  submitBehavior?: TextInputProps['submitBehavior'];
}

function PasswordInput({ submitBehavior = 'blurAndSubmit' }: Props) {
  const { control, setFocus } = useFormContext();
  return (
    <Controller
      name="password"
      control={control}
      rules={{
        validate: (data: string) => {
          if (data.length < 0) {
            return '비밀번호는 8자 이상 입력해주세요.';
          }
        },
      }}
      render={({ field: { ref, onChange, value }, fieldState: { error } }) => (
        <InputField
          ref={ref}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          secureTextEntry
          submitBehavior={submitBehavior}
          textContentType="oneTimeCode"
          value={value}
          onChangeText={onChange}
          error={error?.message}
          onSubmitEditing={() => setFocus('passwordConfirm')}
        />
      )}
    />
  );
}

export default PasswordInput;
