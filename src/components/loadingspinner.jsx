import "bootstrap/dist/css/bootstrap.min.css";
function Loading() {
  return (
    <>
      <div className="spinner-border m-5" role="status">
        <span className="visually-hidden" style={{ color: "white" }}>
          Loading...
        </span>
      </div>
    </>
  );
}

export default Loading;
