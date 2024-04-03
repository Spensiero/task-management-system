import { ElementType, ReactElement, ReactEventHandler, ReactNode } from "react";
export interface ITask {
    id?: number;
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
export interface ICommonButton {
    title: string;
    label: string;
    icon?: ReactElement | "";
    type?: "button" | "submit" | "reset";
    onClick?: ReactEventHandler;
    backgroundColor?: string;
    shadowColorRgba?: string;
    textColor?: string;
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
export interface ITaskForm {
    handleSubmit: (data: ITask)=> void;
    taskToUpdate?: ITask | undefined;
}
export interface IConfirmDeleteModal{
    onCancel: ()=> void;
    onConfirm: ()=> void;
}

  