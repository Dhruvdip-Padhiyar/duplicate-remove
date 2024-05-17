"use client";
import React, { useState } from "react";

const HomePage = () => {
  const [allData1, setAllData1] = useState("");
  const [allData2, setAllData2] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = () => {
    const data1 = allData1
      .split(",")
      .filter((element) => !allData2.split(",").includes(element));
    // const data2 = allData2
    //   .split(",")
    //   .filter((element) => !allData1.split(",").includes(element));
    console.log([...data1]);
    // setFilteredData([...data1, ...data2]);
    setFilteredData([...data1]);
  };

  return (
    <main className="m-auto min-h-screen bg-[#f5f5f5]">
      <div className="flex  items-center justify-evenly px-24 pt-12">
        <div className="flex flex-col w-[45%] gap-2">
          <label className="text-[20px]">All Data :-</label>
          <textarea
            rows={7}
            className="border-2"
            onChange={(e) => setAllData1(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-[45%] gap-2">
          <label className="text-[20px]">Data For remove :-</label>
          <textarea
            rows={7}
            className="border-2 w-full"
            onChange={(e) => setAllData2(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center my-4">
        <button
          className="border-2 bordeer-slate-600 text-[20px] text-white bg-slate-600 px-4 py-2 rounded-full w-[100px] hover:bg-slate-300"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
      <div className="w-1/2 bg-white h-[300px] overflow-y-auto m-auto border-2 p-4">
        <textarea
          value={filteredData.join(",")??""}
{/*             rows={7} */}
            className="border-2 w-full"
{/*             onChange={(e) => setAllData2(e.target.value)} */}
          />
        
      </div>
      <p>
      count :- <span className="text-[16px]">{filteredData..length}</span>
      </p>
    </main>
  );
};

export default HomePage;
