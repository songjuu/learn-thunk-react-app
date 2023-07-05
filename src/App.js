import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "./redux/modules/todosSlice";

function App() {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  // console.log("todos💛❤❤", todos);-> undefined???

  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  //미리 걸러지게끔 옵셔널 체이닝도 필요없게끔
  if (isLoading) {
    return <div>로딩중..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}

export default App;
