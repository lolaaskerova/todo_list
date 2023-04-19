import React from "react";
import "./lists.scss";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { DeleteOutline, DoneOutlineRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  removeAll,
} from "../../redux/features/todoSlice";

const Lists = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo);
  console.log(todos);
  //delete todo
  const handleDelete = (item) => {
    dispatch(deleteTodo(item));
  };

  //complete todo
  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  //remove all
  const removeAllTodo = () => {
    dispatch(removeAll());
  };
  return (
    <>
      {" "}
      {todos.length !== 0 ? (
        <Button
          onClick={() => removeAllTodo()}
          style={{
            color: "white",
            fontFamily: "Montserrat",
            textTransform: "lowercase",
            fontSize: "16px ",
          }}
          color="success"
          variant="contained"
        >
          remove all
        </Button>
      ) : (
        <></>
      )}
      <div className="todo-content">
        {todos.length !== 0 ? (
          todos.map((t) => (
            <Card
              sx={{ mt: 2 }}
              key={t.id}
              className={t.isCompleted ? "done" : ""}
            >
              <CardContent
                style={{ padding: 0 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <IconButton onClick={() => handleComplete(t)}>
                  <DoneOutlineRounded />
                </IconButton>
                <Typography
                  component="span"
                  sx={{
                    width: { xs: "45%", sm: "55%", md: "65%", lg: "75%" },
                    wordBreak: "break-word",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {t.title}
                </Typography>
                <IconButton onClick={() => handleDelete(t.id)}>
                  <DeleteOutline />
                </IconButton>
              </CardContent>
            </Card>
          ))
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Lists;
