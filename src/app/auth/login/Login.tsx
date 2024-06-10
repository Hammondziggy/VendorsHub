"use client";
import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/app/auth/input";
import CustomButton from "@/components/common/customButton";
import Link from "next/link";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

type LoginProps = {
  logo: string;
  title: string;
  login: (formData: FormData) => Promise<void>; // Add login function type
};

const Login: React.FC<LoginProps> = ({ logo, title, login }) => {
  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      await login(values); // Call the login function with form values
    } catch (error) {
      console.error(error);
      // Handle error
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-white w-[65%] md:max-w-[32rem] lg:max-w-[40rem] h-fit mx-auto px-6 py-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl">
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
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6">
              <Input
                label="Username"
                placeholder="Enter Username"
                type="text"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red -my-4 sm:text-sm"
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
                className="text-red -my-4 sm:text-sm"
              />

              <CustomButton
                type="submit"
                disabled={isSubmitting}
                borderRadius="4px"
                width="100%"
                className="py-1 text-black text-sm md:text-md lg:text-md xl:text-md"
              >
                Log in
              </CustomButton>
            </Form>
          )}
        </Formik>

        <p className="text-[#FF0000] inline-block w-fit font-bold text-[11px] md:text-sm lg:text-[14px] xl:text-[14px] -mt-6 cursor-pointer ml-auto">
          <Link href="/comingsoon">Forgot Password</Link>
        </p>

        <p className="text-center font-medium md:text-normal text-[10px] lg:text-normal xl:text-normal">
          Don&apos;t have an account?
          <Link href="/auth/signup" className="text-[#FF8100]">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
