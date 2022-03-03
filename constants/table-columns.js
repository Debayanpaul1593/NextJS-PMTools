export const BUGLIST_TABLE_COLUMNS = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    headerClassName: "column-style",
  },
  {
    field: "severity",
    headerName: "Severity",
    width: 70,
    editable: true,
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 70,
    editable: true,
  },
  {
    field: "type",
    headerName: "Type",
    width: 110,
    editable: true,
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
    editable: true,
  },
  {
    field: "createdBy",
    headerName: "Created By",
    width: 110,
    editable: true,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    width: 110,
    editable: true,
  },
  {
    field: "resolvedBy",
    headerName: "Resolved By",
    width: 110,
    editable: true,
  },
  {
    field: "resolution",
    headerName: "Resolution",
    width: 110,
    editable: true,
  },
];

export const TASKLIST_TABLE_COLUMNS = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    headerClassName: "column-style",
  },
  {
    field: "bugId",
    headerName: "BugId",
    width: 90,
    headerClassName: "column-style",
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 70,
    editable: true,
  },
  {
    field: "sprint",
    headerName: "Sprint",
    width: 110,
    editable: true,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    editable: true,
  },
  {
    field: "createdBy",
    headerName: "Created By",
    width: 110,
    editable: true,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    width: 110,
    editable: true,
  },
  {
    field: "finishedBy",
    headerName: "Finished By",
    width: 90,
    editable: true,
  },
  {
    field: "est",
    headerName: "Est.",
    width: 50,
    editable: true,
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 50,
    editable: true,
  },
  {
    field: "left",
    headerName: "Left",
    width: 50,
    editable: true,
  },
  {
    field: "deadline",
    headerName: "Deadline",
    width: 110,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
    editable: true,
  },
  
];
