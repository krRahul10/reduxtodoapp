import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { RemoveData } from "../redux/action/action";
import Modal from "react-bootstrap/Modal";
import { UpdateData } from "../redux/action/action";

const Todo = () => {
  // model show ke liye ye state use hoga
  const [showeye, setShoweye] = useState(false);

  // model ke ander value ke liye  elem ka use hoga
  const [showeyeval, setShoweyeval] = useState("");

  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState("");
  const [ind, setInd] = useState("");

  const handleClose = () => setShow(false);

  // useSelector ka use reducer ke function ko call karne ke liye hota h
  const { user_data } = useSelector((state) => state.TodoReducer);

  // console.log(user_data);

  // useDispatch ka use action wale function ko call kanr ke liye hota h
  const dispatch = useDispatch();

  const removeElem = (id) => {
    // console.log("id", id)
    dispatch(RemoveData(id));
    alert("data delete");
  };

  const userTask = () =>{
    dispatch(UpdateData(update, ind))
    handleClose()
  }

  const handleShow = (el) => {
    setShow(true);
    setUpdate(el);
  };

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
                    onClick={() => {
                      handleShow(elem);
                      setInd(k);
                    }}
                  />
                  <DeleteForeverIcon
                    style={{ color: "red ", cursor: "pointer" }}
                    onClick={() => removeElem(k)}
                  />
                  <RemoveRedEyeIcon
                    style={{ color: "#00d290", cursor: "pointer" }}
                    onClick={() => {
                      setShoweye(true);
                      setShoweyeval(elem);
                    }}
                  />
                </div>
              </div>
            </>
          );
        })}

        {/* Read Model */}

        <Modal show={showeye}>
          <h1 className="mr-3">{showeyeval}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Update Model  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <h1>Update Your Task</h1>
          </Modal.Header>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-items-center">
            <input
              name="task"
              value={update}
              className="form-control col-lg mt-2"
              onChange={(e) => setUpdate(e.target.value)}
            />
          </div>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>userTask()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Todo;
