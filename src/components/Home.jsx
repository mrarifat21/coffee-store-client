import React, { useState } from "react";
import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const initialCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffee);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-9/12  mx-auto">
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></CoffeeCard>
      ))}
    </div>
  );
};

export default Home;
