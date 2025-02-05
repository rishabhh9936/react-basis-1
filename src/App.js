import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import { toast } from "react-toastify";
import Card from "./components/Card";

const App = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigation />
      <Filters filterData={filterData} />
      <Cards />
    </div>
  );
};

export default App;
