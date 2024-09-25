import { useState } from "react";
import "./App.css";
import Postlist from "./components/Postlist";
import Profile from "./components/Profile";
import Postlistprovider from "./store/Postliststore";
import Notification from "./components/Notification";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Videos";
import Chat from "./components/Chat";
import Search from "./components/Search";
import Memes from "./components/Memes";
import Facts from "./components/Facts";
import Navbar from "./components/header";

function App() {
  // state and google auth
  const [selectedtab, setSelectedtab] = useState("home");
  const [input, setInput] = useState();

  // const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  // // console.log(isAuthenticated);

  const storeValue = (a) => {
    setInput(a);
  };
  console.log("FROM app.jsx", input);
  return (
    <>
      <Postlistprovider>
        <BrowserRouter>
          <Navbar
            selectedtab={selectedtab}
            setSelectedtab={setSelectedtab}
            storeValue={storeValue}
          />
          <div className="app-container">
            <div className="data">
              {/* <Sidebar
                selectedtab={selectedtab}
                setSelectedtab={setSelectedtab}
              ></Sidebar> */}
            </div>

            <div className="data">
              <div className="content">
                <Routes>
                  <Route path="/" element={<Postlist></Postlist>}></Route>
                  <Route path="Chat" element={<Chat></Chat>}></Route>
                  <Route
                    path="Noti"
                    element={<Notification></Notification>}
                  ></Route>
                  <Route path="Profile" element={<Profile></Profile>}></Route>
                  <Route path="Videos" element={<Video></Video>}></Route>
                  <Route
                    path="Search"
                    element={<Search Val={input}></Search>}
                    // <Postlist></Postlist>
                  ></Route>
                  <Route path="memes" element={<Memes />}></Route>
                  <Route path="facts" element={<Facts />}></Route>
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </Postlistprovider>
      {/* )} */}
    </>
  );
}

export default App;
