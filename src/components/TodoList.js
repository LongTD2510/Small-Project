import React from "react";
import Todo from "./Todo";
export default function TodoList({ todoList, onCheckBtnCick }) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnCick={onCheckBtnCick} />
      ))}
    </>
  );
}
