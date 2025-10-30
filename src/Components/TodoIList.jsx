import TodoItem from "./TodoItem";
import css from "./TodoIList.module.css";

const TodoIList = ({ todoItem }) => {
  return (
    <>
      {todoItem.map((item) => (
        <TodoItem
          key={item.todoName}
          todoName={item.todoName}
          todoDate={item.todoDate}
          className={css.spanitem}
        />
      ))}
    </>
  );
};

export default TodoIList;
