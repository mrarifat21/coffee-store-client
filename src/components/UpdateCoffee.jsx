import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { photo, name, price, quantity, _id, supplier, taste, details } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateCoffee = Object.fromEntries(formData.entries());
    console.log(updateCoffee);

    // send updated coffee to the database
    fetch(`https://coffee-store-server-delta-rouge.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            // position: "top-end",
            icon: "success",
            title: "Coffee update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F4F1] p-4">
      <div className="  bg-[#F4F3F0] rounded-[5px] p-8 shadow-md overflow-auto">
        <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">
          Update Coffee
        </h2>

        <form onSubmit={handleUpdateCoffee} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                defaultValue={name}
                className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="quantity"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="Enter coffee Quantity"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="supplier"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="taste"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Taste
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Enter coffee price"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="details"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Details
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Photo
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black font-semibold py-2 px-4 rounded hover:bg-[#c2a175] transition duration-300 cursor-pointer"
            >
              Update Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
