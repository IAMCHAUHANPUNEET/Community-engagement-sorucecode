import { NavLink } from "react-router-dom";
import { BsChatFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoIosCreate } from "react-icons/io";
import { IoSettings } from "react-icons/io5";

function Sidebar({ selectedtab, setSelectedtab, userData }) {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{
          width: "14vw",
          minHeight: "100vh",
          overflow: "hidden",
          height: "100%",
          zIndex: "-1",
        }}
      >
        <hr className="h" />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              className={`nav-link text-white ${
                selectedtab === "home" && "active"
              }`}
              aria-current="page"
              onClick={() => setSelectedtab("home")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Createpost"
              className={`nav-link text-white ${
                selectedtab === "CreatePost" && "active"
              }`}
              onClick={() => setSelectedtab("CreatePost")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <IoIosCreate />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Chat"
              className={`nav-link text-white  ${
                selectedtab === "ChatPost" && "active"
              } `}
              onClick={() => setSelectedtab("ChatPost")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#table"></use>
              </svg>
              <BsChatFill />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Setting"
              className={`nav-link text-white ${
                selectedtab === "Setting" && "active"
              }`}
              onClick={() => setSelectedtab("Setting")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              <IoSettings />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={`nav-link text-white ${
                selectedtab === "Log Out" && "active"
              }`}
              onClick={() => setSelectedtab("Log Out")}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#grid"></use>
              </svg>
              <IoMdLogOut />
            </NavLink>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
}
export default Sidebar;
