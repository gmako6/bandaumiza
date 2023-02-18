import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import Upoader from "../../../Components/Upoader";
import { Input, Message, Select } from "../../../Components/UserInputs";
import { Movies } from "../../../Data/Movies";
import { CategoriesData } from "../../../Data/CategoriesData";
import { UserData } from "../../../Data/MovieData";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";

function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);

  return (
    <>
      <SideBar>
        <CastsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          cast={cast}
        />

        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Create Movie</h2>
          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label="Movie title"
              placeholder="The Conjuring"
              type="text"
              bg={true}
            />
            <Input label="Hours" placeholder="2 Hrs" type="text" bg={true} />
          </div>
          <div className="w-full grid md:grid-cols-2 gap-6">
            <Input
              label="Language Use"
              placeholder="English"
              type="text"
              bg={true}
            />
            <Input label="Year" placeholder="2023" type="text" bg={true} />
          </div>
          {/**Images  */}
          <div className="w-full grid md:grid-cols-2 gap-6">
            {/***img without title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image without title
              </p>
              <Upoader />
              <div className="w-32 h-32 bg-main border border-border rounded">
                <img
                  src=""
                  alt={Movies?.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>

            {/***img with title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image with title
              </p>
              <Upoader />
              <div className="w-32 h-32 bg-main border border-border rounded">
                <img
                  src=""
                  alt={Movies?.title}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          {/**Description */}
          <Message label="Description" placeholder="Make it short and sweet" />
          {/**Category */}
          <div className="text-sm w-full">
            <Select label="Movie Category" options={CategoriesData} />
          </div>

          {/**Movie Video */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-border font-semibold text-sm">
              Movie Video
            </label>
            <Upoader />
          </div>

          {/**Movie Cast */}
          <div className="w-full grid lg:grid-cols-2 items-center gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-4 bg-main  border border-subMain border-dashed text-white rounded"
            >
              Add Cast
            </button>
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2  gap-4 ">
              {UserData.map((user, i) => (
                <div
                  key={i}
                  className="p-2 italic text-xs rounded flex-colo bg-main border border-border"
                >
                  <img
                    src={
                      user?.image ? user?.image : "https://picsum.photos/200"
                    }
                    alt={user?.fullName}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p className="">{user?.fullName}</p>
                  <div className="flex-rows mt-2 w-full gap-2">
                    <button className="w-6 h-6  bg-dry flex-colo  border border-border text-subMain rounded">
                      <FaTrashAlt />
                    </button>
                    <button
                      onClick={() => {
                        setCast(user);
                        setModalOpen(true);
                      }}
                      className="w-6 h-6  bg-dry flex-colo  border border-border text-green-600 rounded"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end items-center my-4">
            <button className="bg-subMain flex-rows font-medium transitions hover:bg-dry border border-subMain flex-rows gap-6 text-white py-4 rounded w-full">
              <ImUpload />
              Publish Movie
            </button>
          </div>
        </div>
      </SideBar>
    </>
  );
}

export default AddMovie;
