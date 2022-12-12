import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Todo = () => {
  return (
    <div>
    <div className="todo_data col-lg-5 mx-auto mt-2">
        <div className="todo_container d-flex justify-content-between align-items-center px-2" style={{background:"#dcdde1", borderRadius:"3px", height:"45px"}}>
            <li style={{ listStyle:"none"}}>ReachJs</li>
            <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                <ModeEditIcon style={{color:"#337ab7 ", cursor:"pointer"}}/>
                <DeleteForeverIcon style={{color:"red ", cursor:"pointer"}}/>
                <RemoveRedEyeIcon style={{color:"#00d290", cursor:"pointer"}}/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Todo
