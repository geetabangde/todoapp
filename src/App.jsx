import AppName from "./Components/AppName.jsx";
import AddTodo from "./Components/AddTodo.jsx";
// import TodoItemOne from "./Components/TodoItemOne.jsx";
// import TodoItemTwo from "./Components/TodoItemTwo.jsx";
// import FoodItem from "./Components/FoodItem.jsx";
// import TodoItem from "./Components/TodoItem.jsx";
import TodoIList from "./Components/TodoIList.jsx";


function App() {

  // let food = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];
const todoItem = [
  {
    todoName: "Learn React",
    todoDate: "2024-06-15"
  },
  {
    todoName: "Build a Todo App",
    todoDate: "2024-06-20"
  },
  {
    todoName: "Deploy the App",
    todoDate: "2024-06-25"
  }
]
  return (
    <>
      <div className="container text-center mt-5 align-items-center">
        <AppName />
        <AddTodo />

        <TodoIList todoItem={todoItem}  />

        {/* <TodoItemOne />
        <TodoItemTwo /> */}
        {/* <FoodItem food={food} /> */}
      </div>
    </>
  );
}

export default App;
