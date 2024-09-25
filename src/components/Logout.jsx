function Logout({ lgout, User }) {
  return (
    <>
      <div className="logout">
        <img src={User.picture} className="Img" alt="" />
        <div className="data">
          <h1>Wait {User.name}</h1>
          <h3>Do you really want to logout</h3>
        </div>
        <div className="buttons">
          <button className="yes" onClick={() => lgout()}>
            Yes
          </button>
          <button className="no">No</button>
        </div>
      </div>
    </>
  );
}
export default Logout;
