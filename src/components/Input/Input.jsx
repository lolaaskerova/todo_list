import React, { useState } from "react";
import "./input.scss";
import { useDispatch } from "react-redux";
import { Add, AddCircleRounded } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import { addTodo } from "../../redux/features/todoSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#A4BC92",
  boxShadow: 24,
  borderRadius: "7px",
  padding: "10px",
};

const Input = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  //open modal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //handle change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  //add todo
  const addTask = () => {
    if (value.trim() === "") {
      return;
    }
    dispatch(
      addTodo({
        title: value,
        id: Date.now(),
        isCompleted: false,
      })
    );
    setValue("");
  };

  return (
    <div>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={handleOpen}
        variant="h6"
      >
        <IconButton>
          <Add sx={{ color: "white" }} />
        </IconButton>
        add task
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <TextField
            color="success"
            required
            fullWidth
            onKeyDown={(e) => {
              e.key === "Enter" && addTask();
            }}
            onChange={handleChange}
            value={value}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={(e) => {
                      addTask(e);
                      handleClose();
                    }}
                  >
                    <AddCircleRounded />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Input;
