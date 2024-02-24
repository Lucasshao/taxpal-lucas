import React from "react";
import Head from "next/head";

import Link from "next/link";
import Logo from "@/components/Logo";
// 前面_app那里有设置const Layout = Component.Layout ?? DefaultLayout； 这里不能用它的default，说明它有自己的layout。
import LoginRegisterLayout from "@/components/LoginRegisterLayout";
import { TextField, SelectField } from "@/components/Field";
import Button from "@/components/Button";

const Register = () => {
  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>

      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="w-auto h-10"></Logo>
        </Link>
      </div>

      <h2 className="mt-20 text-lg font-semibold text-gray-900">
        Get started for free
      </h2>

      <p className="mt-2 text-sm text-gray-700">
        Already registered?{" "}
        <Link
          href="/login"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign In
        </Link>{" "}
        to your account.
      </p>
      {/* form action是提交的位置，比如后端哪个位置 */}
      <form
        action="#"
        className="grid grid-cols-1 mt-10 gap-y-8 sm:grid-cols-2 gap-x-6"
      >
        <TextField
          label="First Name"
          id="first_name"
          name="first_name"
          type="text"
          autoComplete="given-name"
          required
        />
        <TextField
          label="Last Name"
          id="last_name"
          name="last_name"
          type="text"
          autoComplete="family-name"
          required
        />
        {/* col-span-full 占领一整行 */}
        <TextField
          className="col-span-full"
          label="Email Address"
          id="register_email"
          name="register_email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          className="col-span-full"
          label="Password"
          id="register_password"
          name="register_password"
          type="password"
          autoComplete="new-password"
          required
        />
        <SelectField
          className="col-span-full"
          label="How did you hear about us ?"
          id="how_hear_about_us"
          name="how_hear_about_us"
        >
          <option value="1">AltaVista Search</option>
          <option value="2">Super Bowl Commercial</option>
          <option value="3">Our Route 34 City bus ad</option>
          <option value="4">The "Never Use This" podcast</option>
          {/* value对应后面的内容，传给后端时候传value 的值 */}
        </SelectField>
        <Button
          type="submit"
          className="col-span-full"
          variant="solid"
          color="blue"
        >
          Sign Up &rarr;
        </Button>
      </form>
    </>
  );
};

Register.Layout = LoginRegisterLayout;

export default Register;
