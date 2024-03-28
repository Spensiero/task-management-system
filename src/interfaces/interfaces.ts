import { ReactEventHandler, ReactNode } from "react";
interface ITask {
    taskType: string,
    title: string,
    status: string,
    assignee: string,
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
    data: ITask[],
    columns: IColumn[]
}
export interface IAddButton {
    onClick: ReactEventHandler
}