import React from 'react'
import { useNavigate } from "react-router-dom";

const Menu = () => {
      const navigate = useNavigate();
  return (
    <div class="w-[276px] h-[914px] pt-[93px] pb-[491px] bg-white flex-col justify-start items-start inline-flex">
      <div class="self-stretch h-[110px] px-[35px] py-4 bg-fuchsia-950 border-b-2 border-black border-opacity-5 justify-start items-center gap-2.5 inline-flex">
        <div class="text-center text-white text-2xl font-medium font-['Akshar']">
          Home
        </div>
      </div>
      <div class="self-stretch h-[110px] px-[35px] py-4 border-b-2 border-black border-opacity-5 justify-start items-center gap-2.5 inline-flex">
        <div class="opacity-50 text-center text-black text-2xl font-medium font-['Akshar']">
          Get started
        </div>
      </div>
      <div class="self-stretch h-[110px] px-[35px] py-4 border-b-2 border-black border-opacity-5 justify-start items-center gap-2.5 inline-flex">
        <div class="opacity-50 text-center text-black text-2xl font-medium font-['Akshar']">
          Sign-In
        </div>
      </div>
    </div>
  );
}

export default Menu