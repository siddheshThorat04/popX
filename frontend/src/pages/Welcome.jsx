import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen bg-black bg-opacity-10   ">
        <div className="  w-[80%]  m-auto     fixed bottom-10 left-0 right-0    " >
      <h1 className="text-2xl  tracking-tight font-semibold "  >Welcome to PopX</h1>
      <p  className="text-gray-600  mt-3 mb-4 " >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, iste?</p>
      <a href="/signup" className="w-[100%] block bg-[#661EFF]  rounded-lg  text-white text-sm font-semibold     text-center py-2"  > Create Account  </a>
      <a href="/login" className="w-[100%] mt-2 block bg-[#C2A8FF] rounded-lg text-black text-sm font-semibold     text-center py-2"  > Already Registered ? Login  </a>
      </div>
    </div>
  );
};

export default Welcome;
