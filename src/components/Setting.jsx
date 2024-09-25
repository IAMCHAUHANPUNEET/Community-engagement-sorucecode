import { useState } from "react";
function Setting() {
  const [togggle, settoggle] = useState();
  const HandleonCLick = () => {
    settoggle(0);
  };
  const HandleonCLick1 = () => {
    settoggle(1);
  };

  const HandleonCLick2 = () => {
    settoggle(2);
  };
  const HandleonCLick3 = () => {
    settoggle(3);
  };

  return (
    <>
      <div className="Settings">
        <div className="buttons">
          <button
            className={`bton ${togggle === 0 && "blue"} `}
            onClick={HandleonCLick}
          >
            Personal
          </button>
          <button
            className={`bton ${togggle === 1 && "blue"}`}
            onClick={HandleonCLick1}
          >
            Security and Password
          </button>
          <button
            className={`bton ${togggle === 2 && "blue"}`}
            onClick={HandleonCLick2}
          >
            {" "}
            Block
          </button>
          <button
            className={`bton ${togggle === 3 && "blue"}`}
            onClick={HandleonCLick3}
          >
            Help
          </button>
        </div>
      </div>
    </>
  );
}
export default Setting;
