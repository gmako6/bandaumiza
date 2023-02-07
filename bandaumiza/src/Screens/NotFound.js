import React from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

function NotFound() {
  return (
    <Layout>
      <div className="container mx-auto min-h-screen px-2 my-24 flex-colo">
        <div className="grid grid-col gap-8">
          <h1 className="lg:text-4xl font-bold text-center">Page Not Found</h1>
          <p className="text-sm text-center text-border">
            The page you are looking for does not exist or you may have mistyped
            the url.
          </p>
        </div>{" "}
        <Link
          to="/"
          className="bg-subMain mt-10 hover:bg-dry flex-rows gap-2  transitions  rounded text-white px-8 font-medium py-3 text-sm"
        >
          <FiHome />
          Back Home
        </Link>
      </div>
    </Layout>
  );
}

export default NotFound;
