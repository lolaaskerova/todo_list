import React, { useState } from "react";
import "./input.scss";
import { Add, AddCircleRounded } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  TextField,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";

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
  //open modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => handleClose()}>
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
