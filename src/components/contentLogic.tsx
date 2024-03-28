"use client"
import React, { useState } from "react";
import Layout from "@/layout/layout";
import AddButton from "./common/addButton";
import TasksTable from "./tasksTable";
import Modal from "./common/modal";

const arrActions = [
  {
    type: "C",
    label:"Create Task" 
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
  const setModalAndAction: (isOpen: boolean, actionType: string, dataId?: number) => void = (isOpen, actionType, dataId)=> {
    setActionType(actionType);
    setIsOpen(isOpen);
    setDataId(dataId);
    console.log(dataId);
  }
  return (
    <>
      <Layout title="TMS">
        <AddButton title="Add Task" label="Task" key="firstChild" onClick={()=> setModalAndAction(true,"C")}/>
        <TasksTable setModalAndAction={setModalAndAction} key="secondChild"/>
      </Layout>
      {isOpen && <Modal 
                    arrActions={arrActions} 
                    actionType={actionType} 
                    onCloseModal={()=> setModalAndAction(false,"C")}
                  >
                    Form
                  </Modal>}
    </>
  );
}
