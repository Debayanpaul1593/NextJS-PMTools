import dashboard from ".";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { assoc, map } from "ramda";
import useSWR from "swr";
import { TASKLIST_TABLE_COLUMNS } from "../../constants";
import { AuthApi } from "../../services/api/authApis";
import { useAuthHook } from "../../services/useAuthHook";
import Router from "next/router";
const READONLY_COLUMNS = TASKLIST_TABLE_COLUMNS;
import { requireAuthentication, load } from "../../services";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
export default function tasksList({ ...props }) {
  //const { data, error } = useSWR("/api/tasks_list", fetcher);
  //if (data) {
  //console.log("retrieved data", data);
  //}
  //if (error) {
  //console.log(error);
  //}
  const isAuth = useAuthHook();
  console.log(">> is Auth", isAuth);
  if (!isAuth) {
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    AuthApi()
      .getAllTasks()
      .then((res) => {
        setData(
          res.map((item, index) => {
            item.id = index.toString();
            const { createdBy, assignedTo, finishedBy } = item;
            delete item.createdBy;
            delete item.assignedTo;
            delete item.finishedBy;
            item.createdBy = createdBy.username;
            item.assignedTo = assignedTo.username;
            item.finishedBy = finishedBy.username;
            return item;
          })
        );
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
