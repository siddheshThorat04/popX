import React,{useState} from "react";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        password: "",
        companyName: "",
        agency: "",
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("popxAuth", JSON.stringify(formData));
      };
    
  return (
    <>
      <div className="h-screen      border-2 border-red-500  ">
        <div className="h-full w-[80%] bg-gray-200   m-auto px-5  py-9   ">
          <h1 className="text-2xl  font-semibold ">
            Create your <br />
            PopX account
          </h1>

          <form   onSubmit={handleSubmit} >
            <div className="  mt-3  ">
              <label
                htmlFor="fullName"
                className="border bg-gray-200  absolute left-16   text-purple-700 text-sm  font-semibold   " 
              >
                Full Name<span className="text-red-600"  >*</span>
              </label>
              <input
                type="text"
                className="bg-transparent p-1 border-[1px] border-opacity-50  w-full  outline-none  border-black  rounded-sm  mt-3 "
                name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              />
            </div>
            <div className=" mt-3  ">
              <label
                htmlFor="PhoneNum"
                className="border bg-gray-200  absolute left-16     text-purple-700 text-sm  font-semibold   " 
              >
                Phone Number<span className="text-red-600"  >*</span>
              </label>
              <input
                type="number"
                maxLength={'10'}
                className="bg-transparent p-2 border-[1px] border-opacity-50  w-full   outline-none  border-black  rounded-sm  mt-3 "
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                
              />
            </div>
            <div className=" mt-3  ">
              <label
                htmlFor="email;"
                className="border bg-gray-200  absolute left-16     text-purple-700 text-sm  font-semibold   " 
              >
                Email address<span className="text-red-600"  >*</span>
              </label>
              <input
                type="email"
                className="bg-transparent p-2 border-[1px] border-opacity-50  w-full   outline-none  border-black  rounded-sm  mt-3 "
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className=" mt-3  ">
              <label
                htmlFor="password"
                className="border bg-gray-200  absolute left-16     text-purple-700 text-sm  font-semibold   " 
              >
                Password<span className="text-red-600"  >*</span>
              </label>
              <input
                type="password"
                className="bg-transparent p-2 border-[1px] border-opacity-50  w-full   outline-none  border-black  rounded-sm  mt-3 "
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className=" mt-3  ">
              <label
                htmlFor="companyName"
                className="border bg-gray-200  absolute left-16     text-purple-700 text-sm  font-semibold   " 
              >
                Company Name<span className="text-red-600"  >*</span>
              </label>
              <input
                type="text"
                className="bg-transparent p-2 border-[1px] border-opacity-50  w-full   outline-none  border-black  rounded-sm  mt-3 "
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
            <p className="text-gray-700 text-sm font-medium">
              Are you an agency? <span className="text-red-600">*</span>
            </p>
            <div className="flex items-center gap-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="agencyYes"
                  name="agency"
                  value="Yes"
                  checked={formData.agency === "Yes"}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border-2 border-purple-500 rounded-full flex items-center justify-center peer-checked:bg-purple-500">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-gray-700">Yes</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  checked={formData.agency === "No"}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <div className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-purple-500">
                  <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-gray-700">No</span>
              </label>

            </div>
            <button
            type="submit"
            className="w-full p-3 mt-4 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 transition"
          >
            Sign Up
          </button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

