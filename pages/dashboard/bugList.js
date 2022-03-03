import dashboard from ".";
import { DataGrid } from "@mui/x-data-grid";
import { assoc, map } from "ramda";
import useSWR from "swr";
import { BUGLIST_TABLE_COLUMNS } from "../../constants";
import { useEffect, useState } from "react";
import { AuthApi } from "../../services";
const disableEdit = map(assoc("editable", false));
const READONLY_COLUMNS = disableEdit(BUGLIST_TABLE_COLUMNS);
export default function bugList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    AuthApi()
      .getAllBugs()
      .then((res) => {
        console.log(res);
        setData(
          res.map((item, index) => {
            console.log(item);
            item.id = index.toString();
            const { createdBy, assignedTo, resolvedBy} = item;
            delete item.createdBy;
            delete item.assignedTo;
            delete item.finishedBy;
            item.createdBy = createdBy?.username ?? createdBy;
            item.assignedTo = assignedTo?.username ?? assignedTo;
            item.resolvedBy= resolvedBy?.username ?? resolvedBy;
            return item;
          })
        );
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
