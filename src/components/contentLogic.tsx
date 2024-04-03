"use client"
import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import CommonButton from "./common/commonButton";
import TasksTable from "./tasksTable";
import Modal from "./common/modal";
import { ITask } from "@/interfaces/interfaces";
import TaskForm from "./taskForm";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";
import ConfirmDeleteModal from "./common/confirmDeleteModal";
import { getTasks } from "@/api/getTasks";

const arrActions = [
  {
    type: "C",
    label:"New Task" 
  },
  {
    type: "U",
    label:"Update Task" 
  },
]

export default function ContentLogic() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [actionType, setActionType] = useState<string>("C");
  const [dataId, setDataId] = useState<number|undefined>();
  const [data, setData] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask>();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const initialData = await getTasks();
        setData(initialData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[])
  
  const setModalAndAction: (isOpen: boolean, actionType: string, dataId?: number) => void = (isOpen, actionType, dataId)=> {
    setActionType(actionType);
    actionType == "C" ? setTaskToUpdate(undefined) : setTaskToUpdate(data.find((o)=> o.id == dataId));
    setIsOpen(isOpen);
    setDataId(dataId);
  }

  const deleteTask = (id: number|undefined) => {
    if (confirmDelete) {
      setConfirmDelete(false);
      const newData = data.filter((o) => o.id !== dataId);
      setData(newData);
      //TODO: DELETE DATA API CALL
    } else {
      setDataId(id);
      setConfirmDelete(true);
    }
  };


  const addTask: (task: ITask) => void = (task)=>{
    if (data.length > 0) {
      // @ts-ignore 
      const maxId = Math.max(...data.map(obj => obj.id));
      task.id = maxId + 1;
    };
    data.unshift(task);
    const newData = [...data]
    setData(newData);
    setIsOpen(false);
    //TODO: CREATE DATA API CALL
  }

  const updateTask: (task: ITask) => void = (task)=>{
    const elementIndex = data.findIndex(item => item.id === task.id);
    data[elementIndex] = task;
    const newData = [...data]
    setData(newData);
    setIsOpen(false);
    //TODO: UPDATE DATA API CALL
  }

  const handleSubmit = (task: ITask)=>{
    switch (actionType) {
      case "C":
        addTask(task);
        break;
      case "U":
        updateTask(task);
        break;
      default:
        addTask(task);
        break;
    }
  }

  return (
    <>
      <Layout title="TMS">
        <CommonButton 
          title="Add Task" 
          label="Add Task" 
          key="firstChild" 
          onClick={()=> setModalAndAction(true,"C")} 
          icon={<MdOutlinePlaylistAddCircle/>}
        />
        <TasksTable data={data} deleteTask={deleteTask} setModalAndAction={setModalAndAction} key="secondChild"/>
      </Layout>
      {isOpen && <Modal 
                    arrActions={arrActions} 
                    actionType={actionType} 
                    onCloseModal={()=> setModalAndAction(false,"C")}
                  >
                    <TaskForm taskToUpdate={taskToUpdate}  handleSubmit={handleSubmit}/>
                  </Modal>}
      {confirmDelete && (
        <ConfirmDeleteModal 
          onCancel={() => setConfirmDelete(false)}
          onConfirm={() => deleteTask(dataId)}
        />
      )}
    </>
  );
}
