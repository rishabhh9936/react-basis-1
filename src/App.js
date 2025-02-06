import React, { useEffect, useState } from "react";
import Filters from "./components/Filters";
import { apiUrl, filterData } from "./data";
import Cards from "./components/Cards";
import Navigation from "./components/Navigation";
import { toast } from "react-toastify";
import Card from "./components/Card";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const[loading,setLoading]= useState(true);
     

  async function fetchData(){
    setLoading(true);


    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false);

  }
  useEffect(() => {
    fetchData();
  } ,[])
  

    
  
  

  return (
    <div>
      <Navigation />
      <Filters filterData={filterData} />


      <din>
        { 
          loading ? (<Spinner/>):(<Card/>)
        }

      </din>
      
    </div>
  );
};

export default App;
