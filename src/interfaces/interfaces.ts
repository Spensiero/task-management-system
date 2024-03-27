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

interface ITable {
    data: ITask[],
    columns: IColumn[]
}