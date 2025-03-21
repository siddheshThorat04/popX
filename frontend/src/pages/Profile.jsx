import React,{useEffect} from "react";
import {useAuthContext} from "../context/authContext.jsx";
import { FaCamera } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const Profile = () => {
    const {authUser}=useAuthContext();
    useEffect(() => {
        console.log(authUser)
    })
    const handleLogout=()=>{
        localStorage.removeItem("popxAuth");
        window.location.href="/";
    }

  return (
    <div className="h-screen bg-black bg-opacity-10  ">
      <div className="w-full bg-white px-5 font-semibold text-center  h-20 flex items-center    ">
        Account Setting
      </div>
      <div  className="w-full  gap-5     flex   " >
        <div className="m-4"  ><img className="h-20 rounded-full "  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" /><div className="bg-[#C2A8FF] w-10 h-10 rounded-full    flex items-center justify-center fixed top-20  " ><FaCamera /></div></div>
        <div> <h1 className="text-xl"  >{authUser.fullName}</h1>   <h2>{authUser.email}</h2> </div> </div>
        <p className="m-4"  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur molestiae autem nobis, aperiam modi reiciendis aut mollitia magni harum soluta.</p>
        <button className="absolute top-5 right-5"  onClick={handleLogout}   ><FiLogOut /></button>
    </div>
    
  );
};

export default Profile;
