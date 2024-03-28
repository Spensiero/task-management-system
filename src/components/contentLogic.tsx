"use client"
import React from "react";
import Layout from "@/layout/layout";
import AddButton from "./common/addButton";
import TasksTable from "./tasksTable";

export default function ContentLogic() {
  return (
    <Layout title="TMS">
      <AddButton title="Add Task" label="Task" key="firstChild" onClick={()=> console.log("Modal")}/>
      <TasksTable key="secondChild"/>
    </Layout>
  );
}
