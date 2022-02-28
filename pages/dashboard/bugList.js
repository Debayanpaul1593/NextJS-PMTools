import dashboard from ".";
import { DataGrid } from "@mui/x-data-grid";
import { assoc, map } from "ramda";
import useSWR from "swr";
import { BUGLIST_TABLE_COLUMNS } from "../../constants";

const disableEdit = map(assoc("editable", false));
const READONLY_COLUMNS = disableEdit(BUGLIST_TABLE_COLUMNS);
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function bugList() {
  const { data, error } = useSWR("/api/bugs_list", fetcher);
  if (data) {
    console.log("retrieved data", data);
    }
  if (error) {
    console.log(error);
  }
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
