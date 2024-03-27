
import React from "react";
import Layout from "@/layout/layout";
import AddButton from "./common/addButton";
import TasksTable from "./tasksTable";

export default function ContentLogic() {
    const children = [
        <AddButton key="firstChild" onClick={()=> console.log("Modal")}/>,
        <TasksTable key="secondChild"/>
    ]
  return (
    <Layout children={children}/>
  );
}
