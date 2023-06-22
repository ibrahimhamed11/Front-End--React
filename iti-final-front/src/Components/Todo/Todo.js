import React, { useEffect } from "react";
import "./todo.css";
import AddTodo from "../AddTodo/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, endTodo, getTodos } from "../../Redux/Slices/TodoSlice";

export default function Todo() {
  const { todos } = useSelector((state) => state.TodoSlice) || [];
  const dispatch = useDispatch();
  const userId = localStorage.getItem("id");

  useEffect(() => {
    dispatch(getTodos(userId));
  }, []);

  // function todoDone(index) {
  //   const todo = document.getElementById(`${index}`);
  //   todo.classList.replace("bg-body-secondary","Hello From front end");
  //   todo.classList.add('text-light')
  // }



  return (
    <div className="col-lg-9">
      <div className="todo-cards my-5">
        <AddTodo />
        <ul>
          {todos?.map((item, index) => {
            return (
              <li className="my-2 list-unstyled" key={index}>
                <div
                  className={`single-card ${item.status === "completed"? "bg-success text-light" : "bg-body-secondary"}  py-3 px-3 rounded`}
                  id={index}
                >
                  <h5>{item.title}</h5>
                  <p>{item.body}</p>
                  <button
                    type="button"
                    className={`btn btn-success btn-sm mx-2 ${item.status === "completed"? "disabled":""}`}
                    onClick={() => {
                      dispatch(endTodo(item._id)).then(()=> {
                        dispatch(getTodos(userId))
                      });
                    }}
                  >
                    مكتمل
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => {
                      dispatch(deleteTodo(item._id)).then(() => {
                        dispatch(getTodos(userId));
                      });
                    }}
                  >
                    حذف
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
