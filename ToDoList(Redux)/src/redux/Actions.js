export function addTask(task) {
  return {
    type: "ADD_TASK",
    data: task
  };
}

export function DeleteTask(id) {
  return {
    type: "DELETE_TASK",
    id: id
  };
}

export function EditTask(id, text) {
  return {
    type: "EDIT_TASK",
    id: id,
    data: text
  };
}

export function CheckTask(id, status) {
  return {
    type: "CHECKED",
    id: id,
    status: status
  };
}
