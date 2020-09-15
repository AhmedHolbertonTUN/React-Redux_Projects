import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { EditTask } from "../redux/Actions";
import { connect, useDispatch } from "react-redux";

const Edit = (props) => {
  const dispatch = useDispatch();
  const { buttonLabel, className, task } = props;

  const [modal, setModal] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="button" onClick={toggle}>
        {buttonLabel}
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
        <ModalBody>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              dispatch(EditTask(task.id, editText));
              toggle();
            }}
          >
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default connect()(Edit);
