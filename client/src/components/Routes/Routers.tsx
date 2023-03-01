import { Box } from "@mui/material";
import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";

function Routers() {
  return (
    <Box>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Box>
  );
}

export default Routers;
