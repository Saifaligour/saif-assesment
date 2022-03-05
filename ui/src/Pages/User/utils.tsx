import * as yup from 'yup';

export const initialValues = {
  fullName: '',
  email: '',
  message: '',
};

export const validationSchema = () => {
  return yup.object({
    fullName: yup
      .string()
      .required('Full Name is required')
      .max(255, 'Can add max 50 charactor'),
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required')
      .max(255, 'Can add max 50 charactor'),
    message: yup
      .string()
      .required('Message Name is required')
      .max(255, 'Can add max 50 charactor'),
  });
};
