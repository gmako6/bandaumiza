import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";

// Rows:
const Rows = (data, i, users) => {
  return (
    <tr key={i}>
      {users ? (
        <>
          <td className={`${Text}`}>
            <div className="w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden">
              <img
                src={`/images/${data?.image ? data.image : "user.png"}`}
                className="h-full w-full object-cover"
                alt={data?.fullName}
              />
            </div>
          </td>
          <td className={`${Text}`}>{data?._id ? data._id : "2R75T8"}</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "12,Jan 2021"}
          </td>
          <td className={`${Text}`}>{data.fullName}</td>
          <td className={`${Text}`}>{data.email}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="font-medium transitions bg-subMain border border-subMain flex-rows gap-4 text-white p-2 rounded w-full sm:w-auto ">
              <FaTrashAlt />
            </button>
          </td>
        </>
      ) : (
        <>
          <td className={`${Text}`}>{data?._id ? data._id : "2R75T8"}</td>
          <td className={`${Text}`}>
            {data.createAt ? data.createAt : "12, Jan 2021"}
          </td>
          <td className={`${Text}`}>{data.title}</td>
          <td className={`${Text} float-right flex-rows gap-2`}>
            <button className="bg-dry border border-border hover:border-subMain flex-rows gap-2 text-border hover:text-subMain rounded py-1 px-2">
              Edit
              <FaEdit className="text-green-500" />
            </button>
            <button className="font-medium transitions bg-subMain border border-subMain flex-rows gap-4 text-white p-2 rounded w-full sm:w-auto ">
              <FaTrashAlt />
            </button>
          </td>
        </>
      )}
    </tr>
  );
};

// Table
function Table2({ data, users }) {
  return (
    <div className="overflow-x-scroll overflow-hidden relative w-full">
      <table className="w-full table-auto border border-border divide-y divide-border">
        <thead>
          <tr className="bg-dryGray">
            {users ? (
              <>
                <th scope="col" className={`${Head}`}>
                  Image
                </th>
                <th scope="col" className={`${Head}`}>
                  ID
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Full Name
                </th>
                <th scope="col" className={`${Head}`}>
                  Email
                </th>
                <th scope="col" className={`${Head} float-right`}>
                  Actions
                </th>
              </>
            ) : (
              <>
                <th scope="col" className={`${Head}`}>
                  ID
                </th>
                <th scope="col" className={`${Head}`}>
                  Date
                </th>
                <th scope="col" className={`${Head}`}>
                  Title
                </th>
                <th scope="col" className={`${Head} float-right`}>
                  Actions
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="bg-main divide-y divide-gray-800">
          {data.map((data, i) => Rows(data, i, users))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
