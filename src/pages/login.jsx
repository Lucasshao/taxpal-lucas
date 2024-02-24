import React from "react";
import Head from "next/head";

import Link from "next/link";
import Logo from "@/components/Logo";
// 前面_app那里有设置const Layout = Component.Layout ?? DefaultLayout； 这里不能用它的default，说明它有自己的layout。
import LoginRegisterLayout from "@/components/LoginRegisterLayout";
import { TextField } from "@/components/Field";
import Button from "@/components/Button";

const Login = () => {
  return (
    <>
      <Head>
        <title>Sign In - TaxPal</title>
      </Head>
      {/* aria-label 学一下 */}
      <div className="flex">
        <Link href="/" aria-label="home">
          <Logo className="w-auto h-10"></Logo>
        </Link>
      </div>

      <h2 className="mt-20 text-lg font-semibold text-gray-900 ">
        Sign in to your account
      </h2>

      <p className="mt-2 text-sm text-gray-700">
        {" "}
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-600 hover:underline"
        >
          Sign Up
        </Link>{" "}
        for a free trial.
      </p>

      <form action="#" className="grid grid-cols-1 mt-10 gap-y-8">
        <TextField
          label="Email Address"
          id="login_email"
          name="login_email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          id="login_password"
          name="login_password"
          type="password"
          autoComplete="current-password"
          required
        />
        <Button type="submit" className="w-full" variant="solid" color="blue">
          {" "}
          Sign In &arr;
        </Button>
      </form>
    </>
  );
};
// 这里太厉害了
Login.Layout = LoginRegisterLayout;
// 这里的layout要用后来建立的layout覆盖掉default的layout
export default Login;
