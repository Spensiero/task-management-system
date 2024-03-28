
import React from "react";
import Table from "./common/table";

  const data = [
    {
        taskType: "BUG",
        title: "Title 1",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 2",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 3",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 4",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 5",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 6",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 7",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 8",
        status: "Done",
        assignee: "Pluto"
    },
    {
        taskType: "BUG",
        title: "Title 9",
        status: "Progress",
        assignee: "Pippo"
    },
    {
        taskType: "TASK",
        title: "Title 10",
        status: "Done",
        assignee: "Pluto"
    },
  ];

  const columns = [
    {
      accessorKey: 'taskType',
      header: 'Type',
      size: 150,
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: 'title',
      header: 'Title',
      size: 150,
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      size: 150,
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    },
    {
      accessorKey: 'assignee',
      header: 'Assignee',
      size: 150,
      Cell: ({ cell }) => <span>{cell.getValue()}</span>,
    }
  ];

export default function TasksTable() {
  return (
    <Table data={data} columns={columns}/>
  );
}
