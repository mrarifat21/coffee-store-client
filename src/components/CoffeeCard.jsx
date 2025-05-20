import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { photo, name, price, quantity, _id } = coffee;
  const handelDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // start deleting the coffee
        fetch(`https://coffee-store-server-delta-rouge.vercel.app/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              // console.log("after delete", data);
              
              // remove the coffe from state
              const remainingCoffees = coffees.filter((coff) => coff._id !== _id);
              setCoffees(remainingCoffees);
            }
          });

      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="" />
      </figure>
      <div className="card-body">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-1">
            <Link to={`coffee/${_id}`}>
              <button className="btn join-item">View Detail</button>
            </Link>{" "}
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => {
                handelDelete(_id);
              }}
              className="btn join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
