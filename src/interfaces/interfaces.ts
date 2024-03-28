import { ReactEventHandler, ReactNode } from "react";
export interface ITask {
    id: number;
    taskType: string;
    title: string;
    status: string;
    assignee: string;
}
interface IColumn {
    accessorKey: string;
    header: string;
    Cell: React.FC<{ cell: { getValue: () => string } }>;
};
export interface ILayout {
    title: string;
    children: ReactNode;
}
export interface ITable {
    data: ITask[]|[],
    columns: IColumn[]
}
export interface IAddButton {
    title: string;
    label: string;
    onClick: ReactEventHandler;
}
type TActions = {
 type: string;
 label: string;
}
export interface IModal {
    children: ReactNode;
    actionType: string; 
    arrActions: TActions[];
    onCloseModal: ()=> void;
}
export interface ITasksTable {
    setModalAndAction: (isOpen: boolean, actionType: string, dataId?: number)=> void;
    data: ITask[]|[];
    deleteTask: (id: number)=> void;
  }
  