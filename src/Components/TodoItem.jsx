function TodoItem({todoName,todoDate}) {
    return(
    <>
      <div className="row align-items-center mb-2">
          <div className="col-6 text-start">{todoName}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2">
            <button className="btn btn-danger w-100">Delete</button>
          </div>
        </div>
    </>
    )
}
export default TodoItem;