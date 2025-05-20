import React from "react";
import Swal from 'sweetalert2'
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    //  send coffee data to database
    fetch("https://coffee-store-server-delta-rouge.vercel.app/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee added successfully",
            icon: "success",
            draggable: true,
          });
          console.log("after adding coffee to db", data);
        }
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F4F1] p-4">
      <div className="  bg-[#F4F3F0] rounded-[5px] p-8 shadow-md overflow-auto">
        <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">
          Add New Coffee
        </h2>
        <p className="text-center text-sm text-gray-600 mb-10 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleAddCoffee} className="space-y-6">
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
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded bg-[#FFF] text-black  outline-none "
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black font-semibold py-2 px-4 rounded hover:bg-[#c2a175] transition duration-300 cursor-pointer"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
