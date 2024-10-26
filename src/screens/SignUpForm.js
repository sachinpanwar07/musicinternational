// src/components/SignUpForm.js
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../Components/TextInput';

const SignUpForm = () => {
  const initialValues = { email: '', password: '', confirmPassword: '' };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = (values) => {
    console.log('Sign Up:', values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form>
        <h2>Sign Up</h2>
        <TextInput label="Email" name="email" type="email" />
        <TextInput label="Password" name="password" type="password" />
        <TextInput label="Confirm Password" name="confirmPassword" type="password" />
        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
