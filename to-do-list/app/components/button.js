import React from "react";
import { Button, IconButton } from "@mui/material";
import Typography from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";


const TodoButton = ({onclick}) => {

    return (
        <IconButton
            type="submit"
            aria-label="AddBoxOutlinedIcon"
            color="secondary"
            size="large"
            onclick={onClick}>
            <AddBoxOutlinedIcon />
        </IconButton>
        );
};

export default TodoButton;
