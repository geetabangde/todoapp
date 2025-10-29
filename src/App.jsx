import AppName from "./Components/AppName.jsx";
import AddTodo from "./Components/AddTodo.jsx";
import TodoItemOne from "./Components/TodoItemOne.jsx";
import TodoItemTwo from "./Components/TodoItemTwo.jsx";
function App() {
  return (
    <>
      <div className="container text-center mt-5 align-items-center">
        <AppName />
        <AddTodo />
        {/* Todo List */}
        <TodoItemOne />
        <TodoItemTwo />
      </div>
    </>
  );
}

export default App;
