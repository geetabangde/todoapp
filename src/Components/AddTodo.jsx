function AddTodo() {
  return (
    <>
      {/* Input Section */}
      <div className="row mb-3">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo here..."
          />
        </div>
        <div className="col-4">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2">
          <button className="btn btn-primary w-100 border-radius-5">Add Todo</button>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
