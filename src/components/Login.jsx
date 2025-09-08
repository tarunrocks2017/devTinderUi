import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./slices/AuthSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log("reducer >>>> ",auth)

  const handleClick = async (event) => {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/auth/login", {
      "email":"elon@gmail.com",
    "password":"Elon@123"
    },{
      withCredentials: true        // if we save credentials or token in cookies then this will ensure that cookies will go with req
    });

    if(response.status == 200) {
      console.log("response here >>>> ",response)
        dispatch(login(response.data.data))
        navigate("/dashboard")
    }
  };
  return (
    <div className="w-[50%] h-[400px] mx-auto mt-16 border border-black  flex flex-col">
      <h1 className="h-[50px] flex items-center justify-center border-b border-gray-400 bg-gray-600 text-3xl text-white">
        Login
      </h1>

      <form className="flex-1 flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Username"
          className="mb-4 p-2 border border-gray-400 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-2 border border-gray-400 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
