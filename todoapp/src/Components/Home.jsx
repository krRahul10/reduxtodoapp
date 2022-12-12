import { Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";

const Home = () => {
  return (
    <div>
      <div className="container">
        <section className="mt-3 text-center">
          <h3>Enter Your task</h3>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input className="form-control" />
            <Button
              variant="contained"
              className="mx-3"
              style={{ background: "#ffa500" }}
            >
              <AddIcon />
            </Button>
          </div>
          <Todo/>
        </section>
      </div>
    </div>
  );
};

export default Home;
