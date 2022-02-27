import dashboard from ".";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { assoc, map } from "ramda";
import useSWR from "swr";
import { TASKLIST_TABLE_COLUMNS } from "../../constants";
import { AuthApi } from "../../services/authApis";
const disableEdit = map(assoc("editable", false));
const READONLY_COLUMNS = disableEdit(TASKLIST_TABLE_COLUMNS);
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function tasksList({ ...props }) {
  //const { data, error } = useSWR("/api/tasks_list", fetcher);
  //if (data) {
  //console.log("retrieved data", data);
  //}
  //if (error) {
  //console.log(error);
  //}
  const [data, setData] = useState([]);
  useEffect(() => {
    const api = AuthApi();
    console.log(api);
    api
      .getAllTasks()
      .then((res) => {
        setData(res.map((item, index) => {
          item.id = index.toString();
          return item;
        }));
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={READONLY_COLUMNS}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
      <style jsx>
        {`
          .column-style {
            background-color: blue;
          }
        `}
      </style>
    </div>
  );
}
