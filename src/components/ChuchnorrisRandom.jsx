import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const ChuchnorrisRandom = () => {
  const [isPharafe, setPhrafe] = useState([]);

  const URL = "https://api.chucknorris.io/jokes/random";

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setPhrafe(res.data);
      })
      .catch((res) => console.log(res.err));
  }, []);

  const handleClickRandom = () => {
    axios
      .get(URL)
      .then((res) => setPhrafe(res.data))
      .catch((res) => console.log(res.err));
  };
  return (
    <div className=" bg-white text-black relative ">
      <p className="text-center font-semibold p-2 ">{isPharafe.value}</p>
      <div className="flex items-center justify-center gap-3 py-10 ">
        <hr className="w-[40%] border-black border-2 " />
        <i className="bx bxl-flask bx-burst text-[2rem]"></i>
        <hr className="w-[40%] border-black border-2 " />
      </div>
      <div className="">
        <button
          onClick={handleClickRandom}
          className="bg-white p-3 rounded-full flex items-center hover:bg-orange-600 transition-colors hover:shadow-2xl hover:shadow-neutral-50 absolute -translate-y-6 translate-x-[118px] sm:translate-x-52 "
        >
          <i className="bx bxs-chess bx-tada bx-rotate-180 text-[1.5rem]"></i>
        </button>
      </div>
    </div>
  );
};

export default ChuchnorrisRandom;
