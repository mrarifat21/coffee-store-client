import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  console.log(initialUsers);

  const hanedleDelete = (id, uid) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-store-server-delta-rouge.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainigUsers = users.filter((user) => user._id !== id);
              console.log(remainigUsers);
              setUsers(remainigUsers);

              //  HW = also delete user from firebase
              fetch(`https://coffee-store-server-delta-rouge.vercel.app/delete-user/${uid}`, {
                method: "DELETE",
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log("Firebase user deleted:", data);
                });

              Swal.fire({
                title: "Deleted!",
                text: "Your account is deleted.",
                icon: "success",
              });
              console.log(`after delete`, data);
            }
          });
      }
    });
  };

  return (
    <div>
      <h3 className="text-4xl text-center"> Users:{users.length}</h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>No</label>
              </th>
              <th>Name</th>
              <th>Phone No.</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>{user.number}</td>
                <td>{user.email}</td>
                <th className="space-x-1">
                  <button className="btn  btn-xs">V</button>
                  <button className="btn  btn-xs">E</button>
                  <button
                    onClick={() => hanedleDelete(user._id, user.uid)}
                    className="btn  btn-xs"
                  >
                    X
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
