import { useDispatch } from "react-redux";
import "../css/Navbar.css";
import { Bell, User } from "lucide-react";
import axios from "axios";
import { logout } from "./slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [enableMenu, setEnableMenu] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );
    dispatch(logout());
    return navigate("/login");
  };

  const handleMenuClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      console.log("coming inside the if ");
      setEnableMenu(false);
    }
  };

  useEffect(() => {
    if (enableMenu) {
      document.addEventListener("mousedown", handleMenuClick);
    } else {
      document.removeEventListener("mousedown", handleMenuClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleMenuClick);
    };
  }, [enableMenu]);

  return (
    <div className="h-[50px] m-auto bg-gray-600 text-white flex">
      <div className="w-1/5 h-full font-bold ml-4 mt-2">DevTinder</div>
      <div className="w-1/3 h-full back flex items-center ml-52">
        <input
          type="text"
          value={""}
          placeholder="search your friend here..."
          className="m-auto rounded bg-white text-black w-[80%] pl-1"
        />
      </div>
      <div
        className="w-1/5 h-full items-center gap-4 pr-4 ml-52 flex"
        style={{ position: "relative" }}
      >
        <Bell className="w-20 h-6 cursor-pointer hover:text-gray-400 mt-[3%] ml-32" />
        <User
          className="w-20 h-6 cursor-pointer hover:text-gray-400  mt-[3%]"
          onClick={() => setEnableMenu(!enableMenu)}
          ref={menuRef}
        />
        {enableMenu && (
          <div
            style={{
              position: "absolute",
              width: "50%",
              height: "200px",
              border: "1px solid black",
              right: "0px",
              top: "50px",
            }}
          >
            <ul className="text-black">
              <li>
                <Link to={"/profile"}>Profile</Link>
              </li>
              <li>
                <Link to={"/connections"}>Connections</Link>
              </li>
              <li>
                <Link to={"/requests"}>Requests</Link>
              </li>
              <li>
                <Link to={"/logout"}>Logout</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p onClick={handleLogout}>Logout</p>
    </div>
  );
};

export default Navbar;
