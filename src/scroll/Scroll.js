import React, { useEffect, useState } from "react";
import "./scroll.css";
function Scroll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
   
    const newData = [];
    for (let i = 0; i < 15; i++) {
      newData.push(`Hi I am ${i+1}`);
    }
    setData((prevData) => [...prevData, ...newData]);
  };
  useEffect(() => {
    fetchData();
    // console.log(data);
  }, [page]);

  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="scroll">
      <h1 className="text"> Infinite Scroll</h1>
      {data.map((val, index) => {
        return (
          <div className="actual_data" key={index}>
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default Scroll;
