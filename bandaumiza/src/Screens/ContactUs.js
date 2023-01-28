import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

function ContactUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-3 gap-4 xl:gap-16 items-center ">
            <div className="p-8 bg-dry rounded-lg border-2 border-border flex-colo">
              <button className="w-20 h-20 flex-colo transitions  rounded-full bg-black bg-opacity-30 ">
                <FaEnvelope className="text-subMain text-2xl" />
              </button>
              <h4 className="text-lg font-semibold my-2">Email</h4>
              <p className="mb-0 text-text leading-7 text-sm">
                info@bandaumiza.com
              </p>
            </div>
            <div className="p-8 bg-dry rounded-lg border-2 border-border flex-colo">
              <button className="w-20 h-20 flex-colo transitions  rounded-full bg-black bg-opacity-30 ">
                <FaPhone className="text-subMain text-2xl" />
              </button>
              <h4 className="text-lg font-semibold my-2">Phone</h4>
              <p className="mb-0 text-text leading-7 text-sm">+2557</p>
            </div>
            <div className="p-8 bg-dry rounded-lg border-2 border-border flex-colo">
              <button className="w-20 h-20 flex-colo transitions  rounded-full bg-black bg-opacity-30 ">
                <FaLocationArrow className="text-subMain text-2xl" />
              </button>
              <h4 className="text-lg font-semibold my-2">Location</h4>
              <p className="mb-0 text-text leading-7 text-sm">
                Arusha, Tanzania
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
