import React from "react";
import "./lists.scss";
import { IconButton, Typography } from "@mui/material";
import { DeleteOutline, DoneOutlineRounded } from "@mui/icons-material";

const Lists = () => {
  return (
    <>
      <Typography variant="body1">
        <IconButton>
          <DoneOutlineRounded />
        </IconButton>
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </Typography>
    </>
  );
};

export default Lists;
