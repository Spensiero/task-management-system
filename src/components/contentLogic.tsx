"use client"
import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import CommonButton from "./common/commonButton";
import TasksTable from "./tasksTable";
import Modal from "./common/modal";
import { ITask } from "@/interfaces/interfaces";
import TaskForm from "./taskForm";
import { MdOutlinePlaylistAddCircle } from "react-icons/md";

let initialDataObj = [
  {
      id:1,
      taskType: "B",
      title: "Title 1",
      status: "P",
      assignee: "Pippo"
  },
  {
      id:2,
      taskType: "T",
      title: "Title 2",
      status: "D",
      assignee: "Pluto"
  },
  {
      id:3,
      taskType: "B",
      title: "Title 3",
      status: "P",
      assignee: "Pippo"
  },
  {
      id:4,
      taskType: "T",
      title: "Title 4",
      status: "T",
      assignee: "Pluto"
  },
  {
      id:5,
      taskType: "B",
      title: "Title 5",
      status: "T",
      assignee: "Pippo"
  },
  {
      id:6,
      taskType: "TASK",
      title: "Title 6",
      status: "D",
      assignee: "Pluto"
  },
  {
      id:7,
      taskType: "B",
      title: "Title 7",
      status: "P",
      assignee: "Pippo"
  },
  {
      id:8,
      taskType: "T",
      title: "Title 8",
      status: "D",
      assignee: "Pluto"
  },
  {
      id:9,
      taskType: "B",
      title: "Title 9",
      status: "T",
      assignee: "Pippo"
  },
  {
      id:10,
      taskType: "T",
      title: "Title 10",
      status: "D",
      assignee: "Pluto"
  },
];

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
  useEffect(()=>{
    //TODO: GET DATA API CALL
    setData(initialDataObj);
  },[])
  
  const setModalAndAction: (isOpen: boolean, actionType: string, dataId?: number) => void = (isOpen, actionType, dataId)=> {
    setActionType(actionType);
    actionType == "C" ? setTaskToUpdate(undefined) : setTaskToUpdate(data.find((o)=> o.id == dataId));
    setIsOpen(isOpen);
    setDataId(dataId);
  }

  const deleteTask: (id: number) => void = (id)=>{
    const newData = data.filter((o)=> o.id !== id)
    setData(newData);
    //TODO: DELETE DATA API CALL
  }

  const addTask: (task: ITask) => void = (task)=>{
    data.push(task);
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
    </>
  );
}
