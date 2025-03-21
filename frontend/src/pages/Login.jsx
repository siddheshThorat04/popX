import React,{useState} from 'react'
import axios from 'axios'

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    };
    const handleSubmit= (e) => {
      e.preventDefault();

      setIsLoading(true)
      axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setIsLoading(false)
        console.log(res.data);
        localStorage.setItem("popxAuth", JSON.stringify(res.data.user));
        window.location.href = "/profile";
      })
      .catch((err) => {
        console.log(err);
      });
    };
    
  return (
    <div className="h-screen bg-black bg-opacity-10  p-5 ">
      <h1 className='text-2xl font-semibold font-sans  '  >Signin to your <br /> PopX account  </h1>
      <p  className='w-[60%] text-gray-600 mt-3 mb-4 '  >Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <form  onSubmit={handleSubmit}  >
      <div className=" mt-3  ">
            <h1 className=" fixed bg-gray-200   text-purple-700 text-sm  font-semibold    "  ><span className="text-red-600" >&nbsp;</span>Email address<span  className="text-red-600" >*</span> </h1>
              
              <input
                type="email"
                className="bg-transparent p-2 border-[1px] border-opacity-50  w-full   outline-none  border-black  rounded-sm  mt-3 "
                placeholder='Enter your email address'
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div> <div className=" mt-3  ">
            <h1 className=" fixed bg-gray-200   text-purple-700 text-sm  font-semibold    "  ><span className="text-red-600" >&nbsp;</span>Password<span  className="text-red-600" >*</span> </h1>
              
              <input
                type="password"
                className="bg-transparent p-2 border-[1px] border-opacity-50  w-full   outline-none  border-black  rounded-sm  mt-3 "
                name="password"
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className='w-full text-center bg-purple-300 mt-4 p-2 rounded-lg font-semibold font-sans  '  >{isLoading ? "..." : "Login"}</button>
            </form>
    </div>
  )
}

export default Login