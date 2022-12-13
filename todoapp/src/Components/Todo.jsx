import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { RemoveData } from "../redux/action/action";
import Modal from "react-bootstrap/Modal";

const Todo = () => {

  // model show ke liye ye state use hoga
  const [showeye, setShoweye] = useState(false);

  // model ke ander value ke liye  elem ka use hoga
  const [showeyeval, setShoweyeval] = useState("");
  

  // useSelector ka use reducer ke function ko call karne ke liye hota h
  const { user_data } = useSelector((state) => state.TodoReducer);

  // console.log(user_data);

  // useDispatch ka use action wale function ko call kanr ke liye hota h
  const dispatch = useDispatch()

  const removeElem = (id) =>{
    // console.log("id", id)
    dispatch(RemoveData(id))
    alert("data delete")
  }

  return (
    <div>
      <div className="todo_data col-lg-5 mx-auto mt-2">
        {user_data.map((elem, k) => {
          return (
            <>
              <div
                className="todo_container mb-2 d-flex justify-content-between align-items-center px-2"
                style={{
                  background: "#dcdde1",
                  borderRadius: "3px",
                  height: "45px",
                }}
              >
                <li style={{ listStyle: "none" }}>{elem}</li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <ModeEditIcon
                    style={{ color: "#337ab7 ", cursor: "pointer" }}
                  />
                  <DeleteForeverIcon
                    style={{ color: "red ", cursor: "pointer" }}
                    onClick={()=> removeElem(k)}
                  />
                  <RemoveRedEyeIcon
                    style={{ color: "#00d290", cursor: "pointer" }}
                    onClick={() => {
                      setShoweye(true)
                      setShoweyeval(elem)
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}

        <Modal show={showeye}>
          <h1 className="mr-3">{showeyeval}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Todo;
