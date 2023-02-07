import React from "react";
import Layout from "../Layout/Layout";
import { Input } from "../Components/UserInputs";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full gap-8 2xl:w-2/5 flex-colo p-8 sm:p-14 md:w-3/5 bg-fry rounded-lg border border-border">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-full h-12 object-contain"
          />
          <Input
            label="Email"
            placeholder="bandaumiza@bandaumiza.com"
            type="Email"
            bg={true}
          />
          <Input
            label="Password"
            placeholder="*******"
            type="password"
            bg={true}
          />
          <Link
            to="/dashboard"
            className="bg-subMain hover:bg-dry flex-rows gap-2  transitions  rounded text-white px-8 font-medium py-3 text-sm"
          >
            <FiLogIn />
            Sign In
          </Link>
          <p className="text-center text-border">
            Don't have an account?
            <Link to="/register" className="text-dryGray font-semibold ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
