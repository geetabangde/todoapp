import AppName from "./Components/AppName.jsx";
import AddTodo from "./Components/AddTodo.jsx";
import TodoItemOne from "./Components/TodoItemOne.jsx";
import TodoItemTwo from "./Components/TodoItemTwo.jsx";
import FoodItem from "./Components/FoodItem.jsx";
function App() {
  let food = ["Pizza", "Burger", "Sushi", "Pasta", "Salad"];
  return (
    <>
      <div className="container text-center mt-5 align-items-center">
        <AppName />
        <AddTodo />
        <FoodItem food={food} />
        <TodoItemOne />
        <TodoItemTwo />
      </div>
    </>
  );
}

export default App;
