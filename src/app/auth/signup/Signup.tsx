'use client';

import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/app/auth/input';
import CustomButton from '@/components/common/customButton';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const Signup: React.FC<{ logo: string; title: string; }> = ({ logo, title }) => {
  const router = useRouter();
  const { signup, signInWithGoogle } = useAuth();

  const handleSubmit = async (values: { email: string, password: string }, { setSubmitting }: any) => {
    setSubmitting(true);
    try {
      await signup(values);
      router.push('/'); 
    } catch (error) {
      console.error('Signup Error:', error);
      alert('Signup failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      await signInWithGoogle();
      router.push('/');
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      alert('Google Sign-In failed. Please try again.');
    }
  };

  return (
    <div className="bg-white w-[65%] md:max-w-xl lg:max-w-2xl h-fit mx-auto px-6 py-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl">
      <div className="flex flex-col gap-9 mx-auto max-w-sm h-fit">
        <div>
          <h3 className="text-yellow xl:text-xl lg:text-lg md:text-lg text-[24px] font-black text-center">
            {logo}
          </h3>
          <h6 className="xl:text-lg md:text-md text-[16px] font-bold text-center mt-4">
            {title}
          </h6>
        </div>
        <Formik
          initialValues={{ email: '', password: '', confirmPassword: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-3">
              <Input
                label="Email"
                placeholder="Enter Email"
                type="email"
                name="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red -my-2 sm:text-sm md:text-[15px] lg:text-[15px]"
              />

              <Input
                label="Password"
                placeholder="Enter Password"
                type="password"
                name="password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red -my-2 sm:text-sm md:text-[15px] lg:text-[15px]"
              />

              <Input
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red -my-2 sm:text-sm md:text-[15px] lg:text-[15px]"
              />

              <CustomButton
                type="submit"
                disabled={isSubmitting}
                borderRadius="4px"
                width="100%"
                className="py-2 text-black"
              >
                Sign Up
              </CustomButton>
            </Form>
          )}
        </Formik>
        <div
          onClick={handleGoogleSignIn}
          className="flex items-center gap-2 justify-center cursor-pointer md:gap-2 lg:gap-4"
        >
          <div className="w-[1.4rem] h-[1.4rem] rounded-sm bg-white flex items-center justify-center shadow-lg p-1">
            <img
              src="/icons/google-favicon.png"
              alt="Google Favicon"
              className="inline-block max-w-full max-h-full"
            />
          </div>
          <p className="text-[12px] md:text-sm lg:text-[14px] xl:text-[16px]">
            Continue with Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
