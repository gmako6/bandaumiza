import React from "react";
import Layout from "../Layout/Layout";
import Head from "../Components/Head";

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Bandaumiza.
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                  enim velit numquam, rerum sapiente fugiat saepe delectus
                  molestiae voluptate ratione voluptatem reprehenderit, impedit
                  iusto repudiandae neque dicta incidunt exercitationem
                  explicabo?
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2  gap-6 ">
              <div className="p-8 bg-dry rounded-lg">
                <span className="text-3xl blog font-extrabold">8K</span>
                <h4 className="text-lg font-semibold my-2">Lovery Users</h4>
                <p className="mb-0 text-text leading-7 text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="p-8 bg-dry rounded-lg">
                <span className="text-3xl blog font-extrabold">10K</span>
                <h4 className="text-lg font-semibold my-2">Listed Movies</h4>
                <p className="mb-0 text-text leading-7 text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
