import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
const TODO_APP_STORAGE_KEY = "TODO_APP";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");
  useState(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    console.log(storagedTodoList)
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);
  useEffect(() => {
    console.log(todoList);
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList , TODO_APP_STORAGE_KEY]);
  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);
  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([{ id: v4(), name: textInput, isCompleted: 0 }, ...todoList]);
      setTextInput("");
    },
    [textInput, todoList]
  );
  const onCheckBtnCick = useCallback((id) => {
    console.log(id);
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: 1 } : todo
      )
    );
  }, []);
  return (
    <div>
      <h3>List to work</h3>
      <TextField
        name="add-todo"
        placeholder="Add more to work..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            ADD
          </Button>
        }
        css={{ padding: "2px 4px 2px" }}
        value={textInput}
        onChange={onTextInputChange}
      />
      <TodoList todoList={todoList} onCheckBtnCick={onCheckBtnCick} />
    </div>
  );
}

export default App;
