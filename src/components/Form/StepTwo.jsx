import React from 'react';
import { useForm } from 'react-hook-form';
import { MainContainer } from './MainContainer';
import { useNavigate } from 'react-router-dom';
import { useData } from './DataContext';
import { Form } from './Form';
import { Input } from './Input';
import { Typography } from '@material-ui/core';
import { PrimaryButton } from './PrimaryButton';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
const scheme = yup.object().shape({
  email: yup
    .string()
    .email('Email should have correct format')
    .required('Email is required field'),
});
const normalizePhoneNumber = value => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }
  return phoneNumber.formatInternational();
};
export const StepTwo = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: data.email, phoneNumber: data.phoneNumber },
    mode: 'onBlur',
    resolver: yupResolver(scheme),
  });

  const onSubmit = data => {
    navigate('result');
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email')}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors.email && `${errors.email.message}`}
        />
        <Input
          {...register('phoneNumber')}
          id="phoneNumber"
          type="tel"
          label="Phone Number"
          name="phoneNumber"
          onChange={e => {
            e.target.value = normalizePhoneNumber(e.target.value);
          }}
        />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
